import mongoose, { Schema } from 'mongoose';

const eateryReviewSchema = new Schema({
    _id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        require: true,
    },
    _eateryReviewComment: { type: String, required: true },
    _eateryReviewRating: { type: Number, required: true },
    _eateryId: { type: String, ref: 'Eatery', required: true },
    _userId: { type: String, ref: 'User', required: true },
});

const EateryReviewModel = mongoose.model('EateryReview', eateryReviewSchema);

export default EateryReviewModel;
