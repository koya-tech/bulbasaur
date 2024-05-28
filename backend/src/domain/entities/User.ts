import { createId } from '@paralleldrive/cuid2';
import UserName from '../valueObject/user/UserName';
import UserId from '../valueObject/user/UserId';
import UserPassword from '../valueObject/user/userPassword';

export default class User {
    private constructor(
        private readonly _userId: UserId,
        private _userName: UserName,
        private _userPassword: UserPassword,
        private _userImgUrl: UserImgUrl,
    ) { }

    static create(
        name: UserName,
        password: UserPassword,
        imgUrl: UserImgUrl,
    ) {
        const userId = new UserId(createId());
        return new User(userId, name, password, imgUrl);
    }

    public delete() {
        // TODO:delete function
        console.log(this._userId);
    }
}
