import mongoose, { Schema } from 'mongoose';

const eaterySchema = new Schema({
    _id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        require: true,
    },
    _eateryName: { type: String, required: true },
    _eateryCategory: { type: String, required: true },
    _eateryDescription: { type: String, required: true },
    _eateryRating: { type: Number, required: true },
    _eateryAddress: { type: String, required: true },
    _eateryLocation: {
        type: [Number],
        required: true,
        validate: {
            validator(value: number[]) {
                return value.length === 2;
            },
            message: 'Eatery location must contain exactly two numbers (latitude and longitude).',
        },
    },
    _eateryCountry: { type: String, required: true },
    _eateryBusinessHours: {
        type: [String],
        required: true,
        validate: {
            validator(value: string[]) {
                return value.length === 2;
            },
            message: 'Eatery businesshour must contain exactly two string (start and end).',
        },
    },
    _eateryRegularHolidays: {
        type: [String],
        required: true,
    },
    _eateryImages: {
        type: [String],
        required: true,
    },
});

const EateryModel = mongoose.model('Eatery', eaterySchema);

export default EateryModel;
