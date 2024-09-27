import Eatery from '../../domain/entities/Eatery';
import { IEateryRepository } from '../../domain/repository/IEateryRepository';
import EateryId from '../../domain/valueObject/eatery/EateryId';

export default class InMemoryEateryRepository implements IEateryRepository {
    public DB: {
        [id: string]: Eatery;
    } = {};

    async save(eatery: Eatery) {
        this.DB[eatery.eateryId.value.toString()] = eatery;
    }

    async update(eatery: Eatery) {
        this.DB[eatery.eateryId.value.toString()] = eatery;
    }

    async deleteById(eateryId: EateryId) {
        delete this.DB[eateryId.value.toString()];
    }

    async findById(eateryId: EateryId): Promise<Eatery | null> {
        const targetEatery = Object.entries(this.DB)
            .find(([id]) => eateryId.value.toString() === this.DB[id]
                .eateryId.value.toString());

        return targetEatery ? targetEatery[1] : null;
    }

    async read(): Promise<Eatery[] | null> {
        return Object.entries(this.DB).map((pair) => pair[1]);
    }
}
