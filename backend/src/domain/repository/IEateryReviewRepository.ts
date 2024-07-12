import EateryReview from '../entities/EateryReview';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';

export interface IEateryReviewRepository {

    save(eatery: EateryReview): Promise<void>;

    update(eatery: EateryReview): Promise<void>;

    delete(eateryId: EateryReviewId): Promise<void>;

    find(eateryId: EateryReview): Promise<EateryReview | null>;
}
