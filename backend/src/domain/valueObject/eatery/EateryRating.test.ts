import EateryRating from './EateryRating';

describe('EateryRating', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryRating(3.5).value).toStrictEqual(3.5);
        expect(new EateryRating(4).value).toStrictEqual(4);
    });

    test('Equals test of EateryRating', () => {
        const EateryRating1 = new EateryRating(5);
        const EateryRating2 = new EateryRating(5.0);
        const EateryRating3 = new EateryRating(3.3);
        expect(EateryRating1.equals(EateryRating2)).toBeTruthy();
        expect(EateryRating1.equals(EateryRating3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryRating.', () => {
        expect(() => new EateryRating(5.1)).toThrow('The number of rating is too big.');
        expect(() => new EateryRating(-0.1)).toThrow('The number of rating is too small.');
    });
});
