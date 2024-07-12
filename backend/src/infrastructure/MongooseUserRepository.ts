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
        const savedUser = new UserModel(user);
        await savedUser.save();
    }

    // eslint-disable-next-line class-methods-use-this
    async update(user: User): Promise<void> {
        const savedUser = new UserModel(user);
        await savedUser.save();
    }

    // eslint-disable-next-line class-methods-use-this
    async delete(userId: UserId): Promise<void> {
        const deletedUser = new UserModel({ _id: userId });
        await deletedUser.deleteOne();
    }

    // eslint-disable-next-line class-methods-use-this
    async find(userId: UserId): Promise<User | null> {
        const findedUser = await UserModel.findById(userId);
        if (!findedUser) {
            return null;
        }
        return User.reconstruct(
            new UserId(findedUser._id),
            new UserName(findedUser.userName),
            new UserPassword(findedUser.userPassword),
            new UserImage(findedUser.userImage),
        );
    }
}
