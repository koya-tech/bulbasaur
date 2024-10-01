import EateryReview from '../../../domain/entities/EateryReview';
import { IEateryReviewRepository } from '../../../domain/repository/IEateryReviewRepository';
import EateryReviewDomainService from '../../../domain/service/EateryReviewDomainService';

export type UpdateEateryReviewCommand = {
    eateryReview: EateryReview;
};

export default class UpdateEateryReviewApplicationService {
    constructor(
        private eateryReviewRepository: IEateryReviewRepository,
    ) { }

    async execute(command: UpdateEateryReviewCommand): Promise<void> {
        const eateryReviewDomainService = new EateryReviewDomainService(
            this.eateryReviewRepository,
        );
        await eateryReviewDomainService.updateEateryReview(command.eateryReview);
    }
}
