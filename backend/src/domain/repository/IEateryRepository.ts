import Eatery from '../entities/Eatery';
import EateryName from '../valueObject/eatery/EateryName';

export interface IEateryRepository {

    save(eatety: Eatery): Promise<void>;

    update(eatety: Eatery): Promise<void>;

    delete(eatetyName: EateryName): Promise<void>;

    find(eatetyName: EateryName): Promise<Eatery | null>;
}
