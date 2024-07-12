import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import UserName from '../valueObject/user/UserName';
import UserImg from '../valueObject/user/UserImage';
import UserPassword from '../valueObject/user/UserPassword';
import User from './User';
import UserId from '../valueObject/user/UserId';

describe('User', () => {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\\/\\P4$$w0rD';
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

    const userId = new UserId(new mongoose.Types.ObjectId());
    const userName = new UserName('Elon Mask');
    const userPassword = new UserPassword(hashedPassword);
    const userImg = new UserImg('avator.jpg');

    it('create', () => {
        const user = User.create(userId, userName, userPassword, userImg);

        expect(user.userName.equals(new UserName('Elon Mask'))).toBeTruthy();
        expect(user.userPassword.equals(new UserPassword(hashedPassword))).toBeTruthy();
        expect(user.userImg.equals(new UserImg('avator.jpg'))).toBeTruthy();
    });
});
