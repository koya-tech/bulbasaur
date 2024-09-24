import bcrypt from 'bcrypt';
import InMemoryUserRepository from '../../infrastructure/shared/InMemoryUserRepository';
import UserImage from '../valueObject/user/UserImage';
import UserName from '../valueObject/user/UserName';
import UserPassword from '../valueObject/user/UserPassword';
import UserDomainService from './UserDomainService';
import User from '../entities/User';
import UserId from '../valueObject/user/UserId';

describe('UserDomainService test', () => {
    let inMemoryUserRepository: InMemoryUserRepository;
    let userDomainService: UserDomainService;
    let beforeEachUser: User;

    const sampleSaltRounds = 10;
    const samplePassword = 'samplePassword';
    const sampleSalt = bcrypt.genSaltSync(sampleSaltRounds);
    const sampleHashedPassword = bcrypt.hashSync(samplePassword, sampleSalt);
    const sampleUser = User.create(
        new UserId('sample'),
        new UserName('sample'),
        new UserPassword(sampleHashedPassword),
        new UserImage('sample.jpg'),
    );

    beforeEach(async () => {
        inMemoryUserRepository = new InMemoryUserRepository();
        userDomainService = new UserDomainService(inMemoryUserRepository);
        const beforeEachSaltRounds = 10;
        const beforeEachPassword = 's0/\\/\\P4$$w0rD';
        const beforeEachSalt = bcrypt.genSaltSync(beforeEachSaltRounds);
        const beforeEachHashedPassword = bcrypt.hashSync(beforeEachPassword, beforeEachSalt);
        beforeEachUser = User.create(
            new UserId('beforeEach'),
            new UserName('beforeEach'),
            new UserPassword(beforeEachHashedPassword),
            new UserImage('beforeEach.jpg'),
        );
        await inMemoryUserRepository.save(beforeEachUser);
    });

    test('return true when same username TEST exist in DB', async () => {
        const result = await userDomainService.IsUserNameDuplicateCheck(beforeEachUser);
        expect(result).toBeTruthy();
    });

    test('return false if same username TEST does not exist in DB', async () => {
        const result = await userDomainService.IsUserNameDuplicateCheck(sampleUser);
        expect(result).toBeFalsy();
    });

    test('deleteUser function test', async () => {
        await userDomainService.deleteUser(beforeEachUser);
        const target = await inMemoryUserRepository.findById(beforeEachUser.userId);
        expect(target).toBeNull();
    });

    test('registerUser function test', async () => {
        await userDomainService.registerUser(sampleUser);
        const target = await inMemoryUserRepository.findById(sampleUser.userId);
        expect(target).toBe(sampleUser);
    });

    test('when already registered the same name user, throw Error', async () => {
        await expect(() => userDomainService.registerUser(beforeEachUser)).rejects.toThrow('UserName is already in use.');
    });

    test('when delete NotExisted User, throw error', async () => {
        await expect(userDomainService.deleteUser(sampleUser)).rejects.toThrow('User not found.');
    });

    test('update function test', async () => {
        const willUpdateUser = await inMemoryUserRepository.findById(beforeEachUser.userId);
        if (willUpdateUser == null) {
            throw new Error('User not found.');
        }
        const updatedUser = User.reconstruct(
            willUpdateUser?.userId,
            new UserName('updatedUser'),
            willUpdateUser?.userPassword,
            willUpdateUser?.userImage,
        );
        await userDomainService.updateUser(updatedUser);
        const updatedUserInDB = await inMemoryUserRepository.findById(updatedUser.userId);
        expect(updatedUserInDB).toBe(updatedUser);
    });
});
