import { createId } from '@paralleldrive/cuid2';
import UserName from '../valueObject/user/UserName';
import UserId from '../valueObject/user/UserId';
import UserPassword from '../valueObject/user/UserPassword';
import UserImage from '../valueObject/user/UserImage';

export default class User {
    private constructor(
        private readonly _userId: UserId,
        private _userName: UserName,
        private _userPassword: UserPassword,
        private _userImage: UserImage,
    ) { }

    static create(
        name: UserName,
        password: UserPassword,
        imgUrl: UserImage,
    ) {
        // TODO:check where do numbering
        const userId = new UserId(createId());
        return new User(userId, name, password, imgUrl);
    }

    static reconstruct(
        userId: UserId,
        userName: UserName,
        userPassword: UserPassword,
        userImage: UserImage,
    ) {
        return new User(userId, userName, userPassword, userImage);
    }

    // TODO : decorator which is experimental stage is not used now.
    get userId(): UserId {
        return this._userId;
    }

    get userName(): UserName {
        return this._userName;
    }

    get userPassword(): UserPassword {
        return this._userPassword;
    }

    get userImg(): UserImage {
        return this._userImage;
    }
}
