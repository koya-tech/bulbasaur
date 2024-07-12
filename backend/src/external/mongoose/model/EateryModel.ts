import mongoose, { Schema } from 'mongoose';

const eaterySchema = new Schema({
    _id: { type: String, required: true },
    eateryName: { type: String, required: true },
    eateryCategory: { type: String, required: true },
    eateryDescription: { type: String, required: true },
    eateryRating: { type: Number, required: true },
    eateryAddress: { type: String, required: true },
    eateryLocation: {
        a: { type: Number, required: true },
        b: { type: Number, required: true },
    },
    eateryContry: { type: String, required: true },
    eateryBusinessHours: { type: String, required: true },
    eateryRegularHolidays: { type: String, required: true },
    eateryImages: { type: String, required: true },
});

const eateryModel = mongoose.model('Eatery', eaterySchema);

export default eateryModel;
