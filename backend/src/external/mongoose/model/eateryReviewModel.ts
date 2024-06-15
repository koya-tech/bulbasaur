import mongoose, { Schema } from 'mongoose';

const eateryReviewSchema = new Schema({
    eateryReviewId: String,
    eateryReviewComment: String,
    eateryReviewRating: String,
    userRef: { type: Schema.Types.ObjectId, ref: 'User' },
    eateryRef: { type: Schema.Types.ObjectId, ref: 'Eatery' },
});

const eateryReviewModel = mongoose.model('EateryReview', eateryReviewSchema);

export default eateryReviewModel;
