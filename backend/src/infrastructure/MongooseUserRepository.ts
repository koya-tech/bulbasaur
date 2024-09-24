import User from '../domain/entities/User';
import { IUserRepository } from '../domain/repository/IUserRepository';
import UserId from '../domain/valueObject/user/UserId';
import UserImage from '../domain/valueObject/user/UserImage';
import UserName from '../domain/valueObject/user/UserName';
import UserPassword from '../domain/valueObject/user/UserPassword';
import UserModel from '../external/mongoose/model/UserModel';

export default class MongooseUserRepository implements IUserRepository {
    // eslint-disable-next-line class-methods-use-this
    async save(user: User): Promise<void> {
        const savedUser = new UserModel({
            _userName: user.userName.value,
            _userPassword: user.userPassword.value,
            _userImage: user.userImage.value,
        });
        await savedUser.save();
    }

    // eslint-disable-next-line class-methods-use-this
    async update(user: User): Promise<void> {
        const updatedUser = await UserModel.findByIdAndUpdate(
            user.userId.value,
            {
                _userName: user.userName.value,
                _userPassword: user.userPassword.value,
                _userImage: user.userImage.value,
            },
            { new: true },
        ).exec();

        if (!updatedUser) {
            throw new Error('User not found or update failed');
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async deleteById(userId: UserId): Promise<void> {
        const result = await UserModel.findByIdAndDelete(userId.value).exec();

        if (!result) {
            throw new Error('User not found or delete failed');
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async findById(userId: UserId): Promise<User | null> {
        const findedUser = await UserModel.findById(userId.value).exec();
        if (!findedUser) {
            throw new Error('User Not Found.');
        }

        return User.reconstruct(
            new UserId(findedUser._id),
            new UserName(findedUser._userName),
            new UserPassword(findedUser._userPassword),
            new UserImage(findedUser._userImage),
        );
    }

    // eslint-disable-next-line class-methods-use-this
    async read(): Promise<User[] | null> {
        const users = await UserModel.find().exec();
        if (!users || users.length === 0) {
            return null;
        }

        return users.map((user) => User.reconstruct(
            new UserId(user._id),
            new UserName(user._userName),
            new UserPassword(user._userPassword),
            new UserImage(user._userImage),
        ));
    }
}
