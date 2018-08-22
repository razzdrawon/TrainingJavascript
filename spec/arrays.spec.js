/* eslint no-undef:off */
import people from '../labs/src/intro/people';

describe('Arrays Testing', () => {
    it('will return true', () => {
        return true;
    });

    it('can be created', () => {
        expect(people.length).toEqual(5);
    });
});

export default people;