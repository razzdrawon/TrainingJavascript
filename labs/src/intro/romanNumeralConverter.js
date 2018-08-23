/* eslint func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off */
export function convert(romanNumeral) {
    let number = null;
    switch (romanNumeral) {
        case 'i':
            number = 1;
            break;
        case 'v':
            number = 5;
            break;
        case 'x':
            number = 10;
            break;
        case 'xv':
            number = 15;
            break;
        case 'l':
            number = 50;
            break;
        case 'c':
            number = 100;
            break;
        case 'd':
            number = 500;
            break;
        case 'm':
            number = 1000;
            break;
        default:
            number = 0;
            break;
    }

return number;
}

export function convertToRoman(decimalNumeral) {
    let roman = null;
    switch (decimalNumeral) {
        case 1:
            roman = 'i';
            break;
        case 2:
            roman = 'ii';
            break;
        case 3:
            roman = 'iii';
            break;
        case 4:
            roman = 'iv';
            break;
        case 5:
            roman = 'v';
            break;
        case 6:
            roman = 'vi';
            break;
        case 7:
            roman = 'vii';
            break;
        case 8:
            roman = 'viii';
            break;
        default:
            roman = '';
            break;
    }

return roman;
}