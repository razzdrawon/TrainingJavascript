/* eslint no-undef:off, func-style:off, require-jsdoc:off,
space-before-function-paren:off, no-unused-vars:off,
no-throw-literal:off, max-len:off */
import {listThings} from '../labs/src/intro/listThings';

describe('Things', () => {
    it('will be true', () => true);
    it('numbered list of people', () => {
        const listOfPeople = listThings("div", [
            "Tahani",
            "Chidi",
            "Jianyu"
        ], 'decimal');
        expect(listOfPeople).toEqual("<div>1. Tahani</div><div>2. Chidi</div><div>3. Jianyu</div>");
    });
    it('can print roman numerals when needed', () => {
        const listOfPeople = listThings(
            "div", [
                "Tahani",
                "Chidi",
                "Jianyu"
            ],
            'roman'
        );
        expect(listOfPeople).toEqual("<div>i. Tahani</div><div>ii. Chidi</div><div>iii. Jianyu</div>");
    });
});