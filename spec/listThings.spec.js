/* eslint no-undef:off, func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off */
import {listThings} from '../labs/src/intro/listThings';

describe('Things', () => {
    it('will be true', () => {
        return true;
    });
    it('will be true', () => {
        const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"]);
        expect(listOfPeople).toEqual("<div>1. Tahani</div><div>2. Chidi</div><div>3. Jianyu</div>");
    });

});