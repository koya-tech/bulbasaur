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
        userId: UserId,
        userName: UserName,
        userPassword: UserPassword,
        userImage: UserImage,
    ) {
        return new User(userId, userName, userPassword, userImage);
    }

    static reconstruct(
        userId: UserId,
        userName: UserName,
        userPassword: UserPassword,
        userImage: UserImage,
    ) {
        return new User(userId, userName, userPassword, userImage);
    }

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
