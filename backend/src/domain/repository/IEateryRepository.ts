import Eatery from '../entities/Eatery';
import EateryId from '../valueObject/eatery/EateryId';

export interface IEateryRepository {

    save(eatery: Eatery): Promise<void>;

    update(eatery: Eatery): Promise<void>;

    delete(eateryId: EateryId): Promise<void>;

    find(eatery: Eatery): Promise<Eatery | null>;
}
