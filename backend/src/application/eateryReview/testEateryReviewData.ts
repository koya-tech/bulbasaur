import EateryReview from '../../domain/entities/EateryReview';
import EateryId from '../../domain/valueObject/eatery/EateryId';
import EateryReviewComment from '../../domain/valueObject/eateryReview/EateryReviewComment';
import EateryReviewId from '../../domain/valueObject/eateryReview/EateryReviewId';
import EateryReviewRating from '../../domain/valueObject/eateryReview/EateryReviewRating';
import UserId from '../../domain/valueObject/user/UserId';

const eateryReviewId = new EateryReviewId('abcdef');

// this is a sample data for testing
export const sampleEateryReview = EateryReview.create(
    eateryReviewId,
    new EateryReviewComment('sampleComment'),
    new EateryReviewRating(3),
    new EateryId('sample-eatery-id'),
    new UserId('user-eatery-id'),
);

// this is a sample data for testing of update function
export const updateEateryReview = EateryReview.create(
    eateryReviewId,
    new EateryReviewComment('UpdateComment'),
    new EateryReviewRating(3),
    new EateryId('update-eatery-id'),
    new UserId('update-user-id'),
);

// this is a sample different data
export const differentEateryReview = EateryReview.create(
    new EateryReviewId('different'),
    new EateryReviewComment('differentComment'),
    new EateryReviewRating(3),
    new EateryId('different-eatery-id'),
    new UserId('different-user-id'),
);
