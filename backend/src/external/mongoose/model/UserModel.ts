import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    _id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        require: true,
    },
    _userName: { type: String, required: true },
    _userPassword: { type: String, required: true },
    _userImage: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
