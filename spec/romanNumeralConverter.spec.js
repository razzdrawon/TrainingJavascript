/* eslint no-undef:off */
import convert from '../labs/src/intro/romanNumeralConverter';

describe('Roman numeral converter', () => {
    it('will return 1 given i', () => {
        let actual = convert('i');
        expect(actual).toEqual(1);
       });
});

export default convert;