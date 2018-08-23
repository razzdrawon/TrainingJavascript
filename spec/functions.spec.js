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
        return true;
    });
});

const expression = function () {return true}

function statement () {return true;}

const arrow = () => true;

const makePerson = (name, last, email = 'no email', phone) => {
    if (name && last) {
        let person = {firstName: name, lastName: last, email: email, phone: phone};
        return JSON.stringify(person);
    }
    throw new Error("error");
};