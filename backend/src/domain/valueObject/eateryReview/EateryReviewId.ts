/* eslint-disable class-methods-use-this */
import ValueObject from '../AbstractValueObject';

export default class EateryReviewId extends ValueObject<string, 'EateryReviewId'> {
    static readonly MAX = 100000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (value.length > EateryReviewId.MAX) {
            throw new Error('The length of eateryReview id is too long.');
        }
        if (value.length < EateryReviewId.MIN) {
            throw new Error('The length of eateryReview id is too short.');
        }
    }
}
