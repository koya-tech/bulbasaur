import countryData from 'country-data';
import ValueObject from '../AbstractValueObject';

export default class EateryCountry extends ValueObject<string, 'EateryCountry'> {
    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (!countryData.countries.all.some((country) => country.alpha3 === value)) { throw new Error('Not match country code'); }
    }
}
