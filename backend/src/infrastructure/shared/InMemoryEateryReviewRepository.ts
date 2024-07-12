import EateryReview from '../../domain/entities/EateryReview';
import { IEateryReviewRepository } from '../../domain/repository/IEateryReviewRepository';
import EateryReviewId from '../../domain/valueObject/eateryReview/EateryReviewId';

export default class InMemoryEateryReviewRepository implements IEateryReviewRepository {
    public DB: {
        [id: string]: EateryReview;
    } = {};

    async save(eateryReview: EateryReview) {
        this.DB[eateryReview.eateryReviewId.value] = eateryReview;
    }

    async update(eateryReview: EateryReview) {
        this.DB[eateryReview.eateryReviewId.value] = eateryReview;
    }

    async delete(eateryReviewId: EateryReviewId) {
        delete this.DB[eateryReviewId.value];
    }

    async find(eateryReview: EateryReview): Promise<EateryReview | null> {
        const targetEateryReview = Object.entries(this.DB)
            .find(([id]) => eateryReview.eateryReviewId.value === this.DB[id].eateryReviewId.value);

        return targetEateryReview ? targetEateryReview[1] : null;
    }
}
