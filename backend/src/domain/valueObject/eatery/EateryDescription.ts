import ValueObject from '../AbstractValueObject';

export default class EateryDescription extends ValueObject<string, 'EateryDescription'> {
    static readonly MAX = 10000;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length >= EateryDescription.MAX) {
            throw new Error('The length of description is too long.');
        }
    }
}
