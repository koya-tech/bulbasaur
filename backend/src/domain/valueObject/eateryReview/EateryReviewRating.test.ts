import EateryReviewRating from './EateryReviewRating';

describe('EateryReviewRating', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryReviewRating(3.5).value).toStrictEqual(3.5);
        expect(new EateryReviewRating(4).value).toStrictEqual(4);
    });

    test('Equals test of EateryReviewRating', () => {
        const EateryReviewRating1 = new EateryReviewRating(5);
        const EateryReviewRating2 = new EateryReviewRating(5.0);
        const EateryReviewRating3 = new EateryReviewRating(3.3);
        expect(EateryReviewRating1.equals(EateryReviewRating2)).toBeTruthy();
        expect(EateryReviewRating1.equals(EateryReviewRating3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryReviewRating.', () => {
        expect(() => new EateryReviewRating(5.1)).toThrow('The number of rating is too big.');
        expect(() => new EateryReviewRating(-0.1)).toThrow('The number of rating is too small.');
    });
});
