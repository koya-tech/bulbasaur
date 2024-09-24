/* eslint-disable class-methods-use-this */
import ValueObject from '../AbstractValueObject';

export default class UserId extends ValueObject<string, 'UserId'> {
    static readonly MAX = 100000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (value.length > UserId.MAX) {
            throw new Error('The length of your id is too long.');
        }
        if (value.length < UserId.MIN) {
            throw new Error('The length of your id is too short.');
        }
    }
}
