/* eslint-disable class-methods-use-this */
import { isCuid } from '@paralleldrive/cuid2';
import ValueObject from '../AbstractValueObject';

export default class EateryId extends ValueObject<string, 'EateryId'> {
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (!isCuid(value)) {
            throw new Error('This EateryId is not cuid.');
        }
    }
}
