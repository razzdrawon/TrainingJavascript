/* eslint no-undef:off */
import showHoisting from '../labs/src/intro/showHoisting';

describe('Show hoisting', () => {
    it('will return true', () => {
        let hoisting = showHoisting();
        expect(hoisting).toBeTruthy();
    });
});

export default showHoisting;