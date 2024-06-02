import ValueObject from '../AbstractValueObject';

export default class UserName extends ValueObject<string, 'UserName'> {
    static readonly MAX = 1000;

    static readonly MIN = 1;

    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        if (value.length > UserName.MAX) {
            throw new Error('The length of your name is too long.');
        }
        if (value.length < UserName.MIN) {
            throw new Error('The length of your name is too short.');
        }
    }
}
