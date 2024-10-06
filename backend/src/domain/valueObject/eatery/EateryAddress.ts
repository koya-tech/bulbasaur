import ValueObject from '../AbstractValueObject';

export default class EateryAddress extends ValueObject<string, 'EateryAddress'> {
    static readonly MAX = 1000;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length >= EateryAddress.MAX) {
            throw new Error('The length of address is too long.');
        }
    }
}
