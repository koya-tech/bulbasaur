import Eatery from '../entities/Eatery';
import EateryId from '../valueObject/eatery/EateryId';

export interface IEateryRepository {

    save(eatery: Eatery): Promise<void>;

    update(eatery: Eatery): Promise<void>;

    deleteById(eateryId: EateryId): Promise<void>;

    findById(eateryId: EateryId): Promise<Eatery | null>;

    read(): Promise<Eatery[] | null>;
}
