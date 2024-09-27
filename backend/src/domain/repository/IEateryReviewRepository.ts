import EateryReview from '../entities/EateryReview';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';

export interface IEateryReviewRepository {

    save(eatery: EateryReview): Promise<void>;

    update(eatery: EateryReview): Promise<void>;

    deleteById(eateryId: EateryReviewId): Promise<void>;

    findById(eateryId: EateryReviewId): Promise<EateryReview | null>;

    read(): Promise<EateryReview[] | null>;
}
