import Eatery from '../../../domain/entities/Eatery';
import { IEateryRepository } from '../../../domain/repository/IEateryRepository';
import EateryDomainService from '../../../domain/service/EateryDomainService';

export type RegisterEateryCommand = {
    eatery: Eatery;
};

export default class RegisterEateryApplicationService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async execute(command: RegisterEateryCommand): Promise<void> {
        const eateryDomainService = await new EateryDomainService(this.eateryRepository);

        await eateryDomainService.registerEatery(command.eatery);
    }
}
