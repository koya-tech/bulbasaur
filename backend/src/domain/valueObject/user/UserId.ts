/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';
import ValueObject from '../AbstractValueObject';

export default class UserId extends ValueObject<mongoose.Types.ObjectId, 'UserId'> {
    constructor(value: mongoose.Types.ObjectId) {
        super(value);
    }

    protected validate(value: mongoose.Types.ObjectId): void {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            throw new Error('This ObjectId is not valid');
        }
    }
}
