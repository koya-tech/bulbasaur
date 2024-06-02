import ValueObject from '../AbstractValueObject';

export default class EateryReviewComment extends ValueObject<string, 'EateryReviewComment'> {
    static readonly MAX = 10000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length >= EateryReviewComment.MAX) {
            throw new Error('The length of comment is too long.');
        }
        if (value.length < EateryReviewComment.MIN) {
            throw new Error('The length of comment is too small.');
        }
    }
}
