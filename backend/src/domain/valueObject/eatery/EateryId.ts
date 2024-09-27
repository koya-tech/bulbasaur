/* eslint-disable class-methods-use-this */
import ValueObject from '../AbstractValueObject';

export default class EateryId extends ValueObject<string, 'EateryId'> {
    static readonly MAX = 100000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (value.length > EateryId.MAX) {
            throw new Error('The length of eatery id is too long.');
        }
        if (value.length < EateryId.MIN) {
            throw new Error('The length of eatery id is too short.');
        }
    }
}
