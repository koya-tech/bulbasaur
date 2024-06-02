import ValueObject from '../AbstractValueObject';

export default class EateryLocation extends ValueObject<[number, number], 'EateryLocation'> {
    static readonly LONGITUDE_MAX = 90;

    static readonly LONGITUDE_MIN = -90;

    static readonly LATITUDE_MAX = 180;

    static readonly LATITUDE_MIN = -180;

    constructor(value: [number, number]) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: [number, number]): void {
        if (value[0] < EateryLocation.LONGITUDE_MIN || value[0] > EateryLocation.LONGITUDE_MAX) {
            throw new Error('The LONGITUDE is not correct.');
        }
        if (value[1] < EateryLocation.LATITUDE_MIN || value[1] > EateryLocation.LATITUDE_MAX) {
            throw new Error('The LATITUDE is not correct.');
        }
    }
}
