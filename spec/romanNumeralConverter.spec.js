/* eslint no-undef:off */
import {RomanNumeralConverter} from '../labs/src/intro/romanNumeralConverter';

const convertor = new RomanNumeralConverter();
describe('Roman numeral convertor.converter', () => {
    it('will return 1 given i', () => {
        let actual = convertor.convert('i');
        expect(actual).toEqual(1);
    });
    it('will return 5 given v', () => {
        let actual = convertor.convert('v');
        expect(actual).toEqual(5);
    });
    it('will return 10 given x', () => {
        let actual = convertor.convert('x');
        expect(actual).toEqual(10);
    });
    it('will return 15 given xv', () => {
        let actual = convertor.convert('xv');
        expect(actual).toEqual(15);
    });
    it('will return 50 given l', () => {
        let actual = convertor.convert('l');
        expect(actual).toEqual(50);
    });
    it('will return 100 given c', () => {
        let actual = convertor.convert('c');
        expect(actual).toEqual(100);
    });
    it('will return 500 given d', () => {
        let actual = convertor.convert('d');
        expect(actual).toEqual(500);
    });
    it('will return 1000 given m', () => {
        let actual = convertor.convert('m');
        expect(actual).toEqual(1000);
    });
});