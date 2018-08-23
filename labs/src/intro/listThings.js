/* eslint no-undef:off, func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off, max-len:off, no-implicit-coercion:off */
import {RomanNumeralConverter} from './romanNumeralConverter';

const converter = new RomanNumeralConverter();
export function listThings (str, arr, flag) {
    let htmlStr = '';
    for (let index in arr) {
        if (flag === 'decimal') {
            htmlStr += `<${str}>${+index + 1}. ${arr[index]}</${str}>`;
        } else {
            htmlStr += `<${str}>${converter.convertToRoman(Number(index) + 1)}. ${arr[index]}</${str}>`;
        }
    }

return htmlStr;
}