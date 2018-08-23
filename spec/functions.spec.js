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
    it('can create a person', () => {
        let person = makePerson('Veronica', 'Castro', 'lavero@gmail.com', '55999999');
        expect(person).toBe(JSON.stringify({firstName: 'Veronica', lastName: 'Castro', email: 'lavero@gmail.com', phone: '55999999'}));
    });
    it('will throw if no name is passed in', () => {
        expect(() => makePerson(undefined, 'Castro', 'lavero@gmail.com', '55999999')).toThrowError();

    });
    it("will set email to 'no email' if not provided", () => {
        let person = makePerson('Veronica', 'Castro', undefined, '55999999');
        expect(person).toBe(JSON.stringify({firstName: 'Veronica', lastName: 'Castro', email: 'no email', phone: '55999999'}));
    });
    it("will set phone to 'no phone' if not provided", () => {
        let person = makePerson('Veronica', 'Castro', 'lavero@gmail.com', undefined);
        expect(person).toBe(JSON.stringify({firstName: 'Veronica', lastName: 'Castro', email: 'lavero@gmail.com', phone: 'no phone'}));
    });
    it("can calculate a factorial", () => {
        let f = factorial(10);
        expect(f).toBe(3628800);
    });
    it("can calculate three factorials", () => {
        let f = multiplefactorial(2, 3, 4);
        expect(f).toBe(JSON.stringify([2,6,24]));
    });
    it("can calculate three factorials", () => {
        let f = multiplefactorial(2, 3, 4, 10, 7, 5, 1, 6, 8, 9);
        expect(f).toBe(JSON.stringify([2, 6, 24, 3628800, 5040, 120, 1, 720, 40320, 362880]));
    });
    it("will return 1 if no params", () => {
        let f = multiplefactorial();
        expect(f).toBe(1);
    });
});

const expression = function () {return true}

function statement () {return true;}

const arrow = () => true;

const makePerson = (name, last, email = 'no email', phone = 'no phone') => {
    if (name && last) {
        let person = {firstName: name, lastName: last, email: email, phone: phone};
        return JSON.stringify(person);
    }
    throw new Error("error");
};

let factorial = (number) => {
    if(number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
};

let multiplefactorial = (...numbers) => {
    let factorials = [];
    for(let n of numbers) {
        factorials.push(factorial(n));
    }

    if(factorials.length < 1) {
        return 1;
    }
    return JSON.stringify(factorials);
    
    
};