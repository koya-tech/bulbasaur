import Eatery from '../../../domain/entities/Eatery';
import { IEateryRepository } from '../../../domain/repository/IEateryRepository';
import EateryDomainService from '../../../domain/service/EateryDomainService';

export type DeleteEateryCommand = {
    eatery: Eatery;
};

export default class DeleteEateryApplicationService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async execute(command: DeleteEateryCommand): Promise<void> {
        const eateryDomainService = await new EateryDomainService(this.eateryRepository);

        await eateryDomainService.deleteEatery(command.eatery);
    }
}
