/* eslint-disable class-methods-use-this */
import { isCuid } from '@paralleldrive/cuid2';
import ValueObject from '../AbstractValueObject';

export default class UserId extends ValueObject<string, 'UserId'> {
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (!isCuid(value)) {
            throw new Error('This userId is not cuid.');
        }
    }
}
