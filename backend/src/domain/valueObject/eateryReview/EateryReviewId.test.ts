import mongoose from 'mongoose';
import EateryReviewId from './EateryReviewId';

describe('EateryReviewId', () => {
    const objectId1 = new mongoose.Types.ObjectId();
    const objectId2 = new mongoose.Types.ObjectId();

    // * Normal
    test('Normal test', () => {
        expect(new EateryReviewId(objectId1).value).toBe(objectId1);
        expect(new EateryReviewId(objectId2).value).toBe(objectId2);
    });

    test('Equals test of EateryReviewId', () => {
        const EateryReviewId1 = new EateryReviewId(objectId1);
        const EateryReviewId2 = new EateryReviewId(objectId1);
        const EateryReviewId3 = new EateryReviewId(objectId2);
        expect(EateryReviewId1.equals(EateryReviewId2)).toBeTruthy();
        expect(EateryReviewId1.equals(EateryReviewId3)).toBeFalsy();
    });
});
