import Eatery from '../entities/Eatery';
import EateryId from '../valueObject/eatery/EateryId';

export interface IEateryRepository {

    save(eatety: Eatery): Promise<void>;

    update(eatety: Eatery): Promise<void>;

    delete(eatetyId: EateryId): Promise<void>;

    find(eatetyId: EateryId): Promise<Eatery | null>;
}
