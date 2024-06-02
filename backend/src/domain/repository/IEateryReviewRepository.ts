import EateryReview from '../entities/EateryReview';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';

export interface IEateryRepository {

    save(eatety: EateryReview): Promise<void>;

    update(eatety: EateryReview): Promise<void>;

    delete(eatetyId: EateryReviewId): Promise<void>;

    find(eatetyId: EateryReviewId): Promise<EateryReview | null>;
}
