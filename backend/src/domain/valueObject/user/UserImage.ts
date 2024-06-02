import ValueObject from '../AbstractValueObject';

export default class UserImage extends ValueObject<string, 'UserImage'> {
    static readonly MAX = 100;

    static readonly MIN = 5;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length > UserImage.MAX) {
            throw new Error('The length of your imgUrl is too long.');
        }
        if (value.length < UserImage.MIN) {
            throw new Error('The length of your imgUrl is too short.');
        }
    }
}
