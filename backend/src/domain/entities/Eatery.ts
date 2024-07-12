import { createId } from '@paralleldrive/cuid2';
import EateryAdress from '../valueObject/eatery/EateryAdress';
import EateryBusinessHours from '../valueObject/eatery/EateryBusinessHours';
import EateryCategory from '../valueObject/eatery/EateryCategory';
import EateryCountry from '../valueObject/eatery/EateryCountry';
import EateryDescription from '../valueObject/eatery/EateryDescription';
import EateryId from '../valueObject/eatery/EateryId';
import EateryImages from '../valueObject/eatery/EateryImages';
import EateryLocation from '../valueObject/eatery/EateryLocation';
import EateryName from '../valueObject/eatery/EateryName';
import EateryRating from '../valueObject/eatery/EateryRating';
import EateryRegularHolidays from '../valueObject/eatery/EateryRegularHolidays';

export default class Eatery {
    private constructor(
        private readonly _eateryId: EateryId,
        private _eateryName: EateryName,
        private _eateryCategory: EateryCategory,
        private _eateryDescription: EateryDescription,
        private _eateryRating: EateryRating,
        private _eateryAddress: EateryAdress,
        private _eateryLocation: EateryLocation,
        private _eateryContry: EateryCountry,
        private _eateryBusinessHours: EateryBusinessHours,
        private _eateryRegularHolidays: EateryRegularHolidays,
        private _eateryImages: EateryImages,
    ) { }

    static create(
        eateryName: EateryName,
        eateryCategory: EateryCategory,
        eateryDescription: EateryDescription,
        eateryRating: EateryRating,
        eateryAddress: EateryAdress,
        eateryLocation: EateryLocation,
        eateryContry: EateryCountry,
        eateryBusinessHours: EateryBusinessHours,
        eateryRegularHolidays: EateryRegularHolidays,
        eateryImages: EateryImages,
    ) {
        const eateryId = new EateryId(createId());
        return new Eatery(
            eateryId,
            eateryName,
            eateryCategory,
            eateryDescription,
            eateryRating,
            eateryAddress,
            eateryLocation,
            eateryContry,
            eateryBusinessHours,
            eateryRegularHolidays,
            eateryImages,
        );
    }

    // For Test
    static reconstuct(
        eateryId: EateryId,
        eateryName: EateryName,
        eateryCategory: EateryCategory,
        eateryDescription: EateryDescription,
        eateryRating: EateryRating,
        eateryAddress: EateryAdress,
        eateryLocation: EateryLocation,
        eateryContry: EateryCountry,
        eateryBusinessHours: EateryBusinessHours,
        eateryRegularHolidays: EateryRegularHolidays,
        eateryImages: EateryImages,
    ) {
        return new Eatery(
            eateryId,
            eateryName,
            eateryCategory,
            eateryDescription,
            eateryRating,
            eateryAddress,
            eateryLocation,
            eateryContry,
            eateryBusinessHours,
            eateryRegularHolidays,
            eateryImages,
        );
    }

    // TODO : decorator which is experimental stage is not used now.
    get eateryId(): EateryId {
        return this._eateryId;
    }

    get eateryName(): EateryName {
        return this._eateryName;
    }

    get eateryCategory(): EateryCategory {
        return this._eateryCategory;
    }

    get eateryDescription(): EateryDescription {
        return this._eateryDescription;
    }

    get eateryRating(): EateryRating {
        return this._eateryRating;
    }

    get eateryAddress(): EateryAdress {
        return this._eateryAddress;
    }

    get eateryLocation(): EateryLocation {
        return this._eateryLocation;
    }

    get eateryContry(): EateryCountry {
        return this._eateryContry;
    }

    get eateryBusinessHours(): EateryBusinessHours {
        return this._eateryBusinessHours;
    }

    get eateryRegularHolidays(): EateryRegularHolidays {
        return this._eateryRegularHolidays;
    }

    get eateryImages(): EateryImages {
        return this._eateryImages;
    }
}
