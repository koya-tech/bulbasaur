import Eatery from '../entities/Eatery';
import { IEateryRepository } from '../repository/IEateryRepository';

export default class EateryDomainService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async IsEateryNameDuplicateCheck(eatery: Eatery) {
        const duplicateEateryName = await this.eateryRepository.find(eatery);
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
        const targetEatery = await this.eateryRepository.find(eatery);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.delete(targetEatery.eateryId);
    }

    async updateEatery(eatery: Eatery): Promise<void> {
        const targetEatery = await this.eateryRepository.find(eatery);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.update(eatery);
    }
}
