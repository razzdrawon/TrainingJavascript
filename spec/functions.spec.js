/* eslint no-undef:off */

describe('functions', () => {
    it('will return true for expression', () => {
        expect(expression()).toBeTruthy();
    });
    it('will return true for statement', () => {
        expect(statement()).toBeTruthy();
    });
    it('will return true for arrow', () => {
        expect(arrow()).toBeTruthy();
    });
});


const expression = function () {return true}

function statement () {return true;}

const arrow = () => true;

