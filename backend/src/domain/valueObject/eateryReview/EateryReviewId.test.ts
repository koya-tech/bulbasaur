import { createId } from '@paralleldrive/cuid2';
import EateryReviewId from './EateryReviewId';

describe('EateryReviewId', () => {
    const cuid1 = createId();
    const cuid2 = createId();

    // * Normal
    test('Normal test', () => {
        expect(new EateryReviewId(cuid1).value).toBe(cuid1);
        expect(new EateryReviewId(cuid2).value).toBe(cuid2);
    });

    test('Equals test of EateryReviewId', () => {
        const EateryReviewId1 = new EateryReviewId(cuid1);
        const EateryReviewId2 = new EateryReviewId(cuid1);
        const EateryReviewId3 = new EateryReviewId(cuid2);
        expect(EateryReviewId1.equals(EateryReviewId2)).toBeTruthy();
        expect(EateryReviewId1.equals(EateryReviewId3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryReviewId.', () => {
        expect(() => new EateryReviewId('not a cuid')).toThrow('This EateryReviewId is not cuid.');
    });
});
