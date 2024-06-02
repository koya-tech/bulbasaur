import ValueObject from '../AbstractValueObject';

export default class EateryReviewRating extends ValueObject<number, 'EateryReviewRating'> {
    static readonly MAX = 5;

    static readonly MIN = 0;

    constructor(value: number) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: number): void {
        if (value > EateryReviewRating.MAX) {
            throw new Error('The number of rating is too big.');
        }
        if (value < EateryReviewRating.MIN) {
            throw new Error('The number of rating is too small.');
        }
    }
}
