import ValueObject from '../AbstractValueObject';

export default class EateryAdress extends ValueObject<string, 'EateryAdress'> {
    static readonly MAX = 1000;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length >= EateryAdress.MAX) {
            throw new Error('The length of adress is too long.');
        }
    }
}
