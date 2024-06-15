import EateryReview from '../entities/EateryReview';
import { IEateryReviewRepository } from '../repository/IEateryReviewRepository';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';

export default class EateryReviewDomainService {
    constructor(
        private eateryReviewRepository: IEateryReviewRepository,
    ) { }

    async registerEatery(eateryReview: EateryReview): Promise<EateryReview> {
        await this.eateryReviewRepository.save(eateryReview);
        return eateryReview;
    }

    async deleteEatery(eateryReviewId: EateryReviewId): Promise<void> {
        const targetEateryReview = await this.eateryReviewRepository.find(eateryReviewId);
        if (!targetEateryReview?.eateryId) {
            throw new Error('Reviewd Eatery not found.');
        }
        await this.eateryReviewRepository.delete(targetEateryReview.eateryReviewId);
    }

    async updateEatery(eateryReviewId: EateryReviewId): Promise<void> {
        const targetEateryReview = await this.eateryReviewRepository.find(eateryReviewId);
        if (!targetEateryReview) {
            throw new Error('Eatery Review not found.');
        }
        await this.eateryReviewRepository.update(targetEateryReview);
    }
}
