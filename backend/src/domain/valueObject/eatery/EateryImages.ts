import ValueObject from '../AbstractValueObject';

export default class EateryImages extends ValueObject<string[], 'EateryImages'> {
    static readonly MAX = 100;

    static readonly MIN = 5;

    constructor(value: string[]) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string[]): void {
        value.forEach((image) => {
            if (image.length > EateryImages.MAX) {
                throw new Error('The length of your imgUrl is too long.');
            }
            if (image.length < EateryImages.MIN) {
                throw new Error('The length of your imgUrl is too short.');
            }
        });
    }
}
