import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    _id: { type: String, required: true },
    userName: { type: String, required: true },
    userPassword: { type: String, required: true },
    userImage: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
