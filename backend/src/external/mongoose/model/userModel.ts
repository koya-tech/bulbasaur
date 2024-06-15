import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userPassword: { type: String, required: true },
    userImage: { type: String, required: true },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
