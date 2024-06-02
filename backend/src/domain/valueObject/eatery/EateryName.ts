import ValueObject from '../AbstractValueObject';

export default class EateryName extends ValueObject<string, 'EateryName'> {
    static readonly MAX = 1000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length > EateryName.MAX) {
            throw new Error('The length of eatery name is too long.');
        }
        if (value.length < EateryName.MIN) {
            throw new Error('The length of eatery name is too short.');
        }
    }
}
