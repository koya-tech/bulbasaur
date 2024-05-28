import ValueObject from '../AbstractValueObject';

export default class UserPassword extends ValueObject<string, 'UserPassword'> {
    constructor(hashedPassword: string) {
        super(hashedPassword);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(plainPassword: string): void {
        const bcryptPattern = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{22}[./A-Za-z0-9]{31}$/;
        if (!bcryptPattern.test(plainPassword)) {
            throw new Error('This password is not hashed.');
        }
    }
}
