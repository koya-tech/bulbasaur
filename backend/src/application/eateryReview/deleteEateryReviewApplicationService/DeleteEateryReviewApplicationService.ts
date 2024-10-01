import EateryReview from '../../../domain/entities/EateryReview';
import { IEateryReviewRepository } from '../../../domain/repository/IEateryReviewRepository';
import EateryReviewDomainService from '../../../domain/service/EateryReviewDomainService';

export type DeleteEateryReviewCommand = {
    eateryReview: EateryReview;
};

export default class DeleteEateryReviewApplicationService {
    constructor(
        private eateryReviewRepository: IEateryReviewRepository,
    ) { }

    async execute(command: DeleteEateryReviewCommand): Promise<void> {
        const eateryReviewDomainService = new EateryReviewDomainService(
            this.eateryReviewRepository,
        );

        await eateryReviewDomainService.deleteEateryReview(command.eateryReview);
    }
}
