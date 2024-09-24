import bcrypt from 'bcrypt';
import UserName from '../valueObject/user/UserName';
import UserPassword from '../valueObject/user/UserPassword';
import User from './User';
import UserId from '../valueObject/user/UserId';
import UserImage from '../valueObject/user/UserImage';

describe('User', () => {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\\/\\P4$$w0rD';
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

    const userId = new UserId('xxxxxxxxxxxx');
    const userName = new UserName('Elon Mask');
    const userPassword = new UserPassword(hashedPassword);
    const userImage = new UserImage('avator.jpg');

    it('create', () => {
        const user = User.create(userId, userName, userPassword, userImage);

        expect(user.userName.equals(new UserName('Elon Mask'))).toBeTruthy();
        expect(user.userPassword.equals(new UserPassword(hashedPassword))).toBeTruthy();
        expect(user.userImage.equals(new UserImage('avator.jpg'))).toBeTruthy();
    });
});
