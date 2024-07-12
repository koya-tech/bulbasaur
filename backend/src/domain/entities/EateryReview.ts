import EateryId from '../valueObject/eatery/EateryId';
import EateryReviewComment from '../valueObject/eateryReview/EateryReviewComment';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';
import EateryReviewRating from '../valueObject/eateryReview/EateryReviewRating';
import UserId from '../valueObject/user/UserId';

export default class EateryReview {
    constructor(
        private readonly _eateryReviewId: EateryReviewId,
        private _eateryReviewComment: EateryReviewComment,
        private _eateryReviewRating: EateryReviewRating,
        private _eateryId: EateryId,
        private _userId: UserId,
    ) { }

    static create(
        eateryReviewId: EateryReviewId,
        eateryReviewComment: EateryReviewComment,
        eateryReviewRating: EateryReviewRating,
        eateryId: EateryId,
        userId: UserId,
    ) {
        return new EateryReview(
            eateryReviewId,
            eateryReviewComment,
            eateryReviewRating,
            eateryId,
            userId,
        );
    }

    static reconstruct(
        eateryReviewId: EateryReviewId,
        eateryReviewComment: EateryReviewComment,
        eateryReviewRating: EateryReviewRating,
        eateryId: EateryId,
        userId: UserId,
    ) {
        return new EateryReview(
            eateryReviewId,
            eateryReviewComment,
            eateryReviewRating,
            eateryId,
            userId,
        );
    }

    get eateryReviewId(): EateryReviewId {
        return this._eateryReviewId;
    }

    get eateryReviewComment(): EateryReviewComment {
        return this._eateryReviewComment;
    }

    get eateryReviewRating(): EateryReviewRating {
        return this._eateryReviewRating;
    }

    get eateryId(): EateryId {
        return this._eateryId;
    }

    get userId(): UserId {
        return this._userId;
    }
}
