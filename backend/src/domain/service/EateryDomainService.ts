import Eatery from '../entities/Eatery';
import { IEateryRepository } from '../repository/IEateryRepository';

export default class EateryDomainService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async IsEateryNameDuplicateCheck(eatery: Eatery) {
        const duplicateEateryName = await this.eateryRepository.findById(eatery.eateryId);
        const isDuplicateEateryName = !!duplicateEateryName;
        return isDuplicateEateryName;
    }

    async registerEatery(eatery: Eatery): Promise<Eatery> {
        if (await this.IsEateryNameDuplicateCheck(eatery)) {
            throw new Error('EateryName is already in use.');
        }
        await this.eateryRepository.save(eatery);
        return eatery;
    }

    async deleteEatery(eatery: Eatery): Promise<void> {
        const targetEatery = await this.eateryRepository.findById(eatery.eateryId);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.deleteById(targetEatery.eateryId);
    }

    async updateEatery(eatery: Eatery): Promise<void> {
        const targetEatery = await this.eateryRepository.findById(eatery.eateryId);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.update(eatery);
    }
}
