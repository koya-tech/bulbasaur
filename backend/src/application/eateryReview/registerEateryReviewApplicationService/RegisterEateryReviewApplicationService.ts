import EateryReview from '../../../domain/entities/EateryReview';
import { IEateryReviewRepository } from '../../../domain/repository/IEateryReviewRepository';
import EateryReviewDomainService from '../../../domain/service/EateryReviewDomainService';

export type RegisterEateryReviewCommand = {
    eateryReview: EateryReview;
};

export default class RegisterEateryReviewApplicationService {
    constructor(
        private eateryReviewRepository: IEateryReviewRepository,
    ) { }

    async execute(command: RegisterEateryReviewCommand): Promise<void> {
        const eateryReviewDomainService = new EateryReviewDomainService(
            this.eateryReviewRepository,
        );

        await eateryReviewDomainService.registerEateryReview(command.eateryReview);
    }
}
