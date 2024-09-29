import Eatery from '../../../domain/entities/Eatery';
import { IEateryRepository } from '../../../domain/repository/IEateryRepository';
import EateryDomainService from '../../../domain/service/EateryDomainService';

export type UpdateEateryCommand = {
    eatery: Eatery;
};

export default class UpdateEateryApplicationService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async execute(command: UpdateEateryCommand): Promise<void> {
        const eateryDomainService = await new EateryDomainService(this.eateryRepository);

        await eateryDomainService.updateEatery(command.eatery);
    }
}
