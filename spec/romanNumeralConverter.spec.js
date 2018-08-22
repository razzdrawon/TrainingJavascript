/* eslint no-undef:off */
import convert from '../labs/src/intro/romanNumeralConverter';

describe('Roman numeral converter', () => {
    it('will return 1 given i', () => {
        let actual = convert('i');
        expect(actual).toEqual(1);
    });
    it('will return 5 given v', () => {
        let actual = convert('v');
        expect(actual).toEqual(5);
    });
    it('will return 10 given x', () => {
        let actual = convert('x');
        expect(actual).toEqual(10);
    });
    it('will return 15 given xv', () => {
        let actual = convert('xv');
        expect(actual).toEqual(15);
    });
});

export default convert;