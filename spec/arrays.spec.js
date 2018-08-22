/* eslint no-undef:off */
import getPeople from '../labs/src/intro/people';

describe('Arrays Testing', () => {
    it('will return true', () => {
        return true;
    });

    it('can be created', () => {
        let peopleCopy = getPeople();
        expect(peopleCopy.length).toEqual(5);
    });
});

export default getPeople;