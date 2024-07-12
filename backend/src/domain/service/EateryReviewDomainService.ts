import EateryReview from '../entities/EateryReview';
import { IEateryReviewRepository } from '../repository/IEateryReviewRepository';

export default class EateryReviewDomainService {
    constructor(
        private eateryReviewRepository: IEateryReviewRepository,
    ) { }

    async registerEatery(eateryReview: EateryReview): Promise<EateryReview> {
        await this.eateryReviewRepository.save(eateryReview);
        return eateryReview;
    }

    async deleteEatery(eateryReview: EateryReview): Promise<void> {
        const targetEateryReview = await this.eateryReviewRepository.find(eateryReview);
        if (!targetEateryReview?.eateryId) {
            throw new Error('Reviewd Eatery not found.');
        }
        await this.eateryReviewRepository.delete(targetEateryReview.eateryReviewId);
    }

    async updateEatery(eateryReview: EateryReview): Promise<void> {
        const targetEateryReview = await this.eateryReviewRepository.find(eateryReview);
        if (!targetEateryReview) {
            throw new Error('Eatery Review not found.');
        }
        await this.eateryReviewRepository.update(eateryReview);
    }
}
