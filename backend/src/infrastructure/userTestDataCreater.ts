import bcrypt from 'bcrypt';
import User from '../domain/entities/User';
import { IUserRepository } from '../domain/repository/IUserRepository';
import UserId from '../domain/valueObject/user/UserId';
import UserImage from '../domain/valueObject/user/UserImage';
import UserName from '../domain/valueObject/user/UserName';
import UserPassword from '../domain/valueObject/user/UserPassword';

const saltRounds = 10;
const myPlaintextPassword = 's0/\\/\\P4$$w0rD';
const salt = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

// eslint-disable-next-line import/prefer-default-export
export const userTestDataCreater = (repository: IUserRepository) => async ({
    userId = 'abcefghijk',
    userName = 'testtest',
    userPassword = hashedPassword,
    userImg = 'test.jpg',
}): Promise<User> => {
    const entity = User.reconstruct(
        new UserId(userId),
        new UserName(userName),
        new UserPassword(userPassword),
        new UserImage(userImg),
    );

    await repository.save(entity);

    return entity;
};
