import EateryId from '../valueObject/eatery/EateryId';
import EateryReviewComment from '../valueObject/eateryReview/EateryReviewComment';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';
import EateryReviewRating from '../valueObject/eateryReview/EateryReviewRating';
import UserId from '../valueObject/user/UserId';
import EateryReview from './EateryReview';

const mockEateryReviewId = new EateryReviewId('abcdef');
const mockEateryReviewComment = new EateryReviewComment('Great place!');
const mockEateryReviewRating = new EateryReviewRating(5);
const mockEateryId = new EateryId('eatery-id');
const mockUserId = new UserId('user-id');

describe('EateryReview', () => {
    it('should create an EateryReview instance with the correct properties', () => {
        const eateryReview = EateryReview.create(
            mockEateryReviewId,
            mockEateryReviewComment,
            mockEateryReviewRating,
            mockEateryId,
            mockUserId,
        );

        expect(eateryReview.eateryReviewId).toEqual(mockEateryReviewId);
        expect(eateryReview.eateryReviewComment).toEqual(mockEateryReviewComment);
        expect(eateryReview.eateryReviewRating).toEqual(mockEateryReviewRating);
        expect(eateryReview.eateryId).toEqual(mockEateryId);
        expect(eateryReview.userId).toEqual(mockUserId);
    });
});
