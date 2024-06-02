/* eslint-disable class-methods-use-this */
import { isCuid } from '@paralleldrive/cuid2';
import ValueObject from '../AbstractValueObject';

export default class EateryReviewId extends ValueObject<string, 'EateryReviewId'> {
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (!isCuid(value)) {
            throw new Error('This EateryReviewId is not cuid.');
        }
    }
}
