import { createId } from '@paralleldrive/cuid2';
import EateryId from '../valueObject/eatery/EateryId';
import EateryReviewComment from '../valueObject/eateryReview/EateryReviewComment';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';
import EateryReviewRating from '../valueObject/eateryReview/EateryReviewRating';
import UserId from '../valueObject/user/UserId';
import EateryReview from './EateryReview';

// Jest mock for createId
jest.mock('@paralleldrive/cuid2', () => ({
    createId: jest.fn().mockReturnValue('mocked-id'),
    isCuid: jest.fn().mockReturnValue(true),
}));

const mockEateryReviewComment = new EateryReviewComment('Great place!');
const mockEateryReviewRating = new EateryReviewRating(5);
const cuid1 = createId();
const cuid2 = createId();
const mockEateryId = new EateryId(cuid1);
const mockUserId = new UserId(cuid2);

describe('EateryReview', () => {
    it('should create an EateryReview instance with the correct properties', () => {
        const eateryReview = EateryReview.create(
            mockEateryReviewComment,
            mockEateryReviewRating,
            mockEateryId,
            mockUserId,
        );

        expect(eateryReview.eateryReviewId).toEqual(new EateryReviewId('mocked-id'));
        expect(eateryReview.eateryReviewComment).toEqual(mockEateryReviewComment);
        expect(eateryReview.eateryReviewRating).toEqual(mockEateryReviewRating);
        expect(eateryReview.eateryId).toEqual(mockEateryId);
        expect(eateryReview.userId).toEqual(mockUserId);
    });
});
