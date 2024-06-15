import Eatery from '../entities/Eatery';
import { IEateryRepository } from '../repository/IEateryRepository';
import EateryName from '../valueObject/eatery/EateryName';

export default class EateryDomainService {
    constructor(
        private eateryRepository: IEateryRepository,
    ) { }

    async IsEateryNameDuplicateCheck(eateryName: EateryName) {
        const duplicateEateryName = await this.eateryRepository.find(eateryName);
        const isDuplicateEateryName = !!duplicateEateryName;
        return isDuplicateEateryName;
    }

    async registerEatery(eatery: Eatery): Promise<Eatery> {
        if (!this.IsEateryNameDuplicateCheck(eatery.eateryName)) {
            throw new Error('EateryName is already in use.');
        }
        await this.eateryRepository.save(eatery);
        return eatery;
    }

    async deleteEatery(eateryName: EateryName): Promise<void> {
        const targetEatery = await this.eateryRepository.find(eateryName);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.delete(targetEatery.eateryName);
    }

    async updateEatery(eatery: Eatery): Promise<void> {
        const targetEatery = await this.eateryRepository.find(eatery.eateryName);
        if (!targetEatery) {
            throw new Error('Eatery not found.');
        }
        await this.eateryRepository.update(targetEatery);
    }
}
