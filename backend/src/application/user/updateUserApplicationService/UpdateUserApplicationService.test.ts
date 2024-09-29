import bcrypt from 'bcrypt';
import User from '../../../domain/entities/User';
import UserId from '../../../domain/valueObject/user/UserId';
import UserImage from '../../../domain/valueObject/user/UserImage';
import UserName from '../../../domain/valueObject/user/UserName';
import UserPassword from '../../../domain/valueObject/user/UserPassword';
import InMemoryUserRepository from '../../../infrastructure/shared/InMemoryUserRepository';
import UpdateUserApplicationService, { UpdateUserCommand } from './UpdateUserApplicationService';
import RegisterUserApplicationService, { RegisterUserCommand } from '../registerUserApplicationService/RegisterUserApplicationService';

describe('UpdateUserApplicationService', () => {
    const sampleSaltRounds = 10;
    const samplePassword = 'samplePassword';
    const sampleSalt = bcrypt.genSaltSync(sampleSaltRounds);
    const sampleHashedPassword = bcrypt.hashSync(samplePassword, sampleSalt);
    const userId = new UserId('sample');
    const sampleUser = User.create(
        userId,
        new UserName('sample'),
        new UserPassword(sampleHashedPassword),
        new UserImage('sample.jpg'),
    );
    const repository = new InMemoryUserRepository();
    const registerUserApplicationService = new RegisterUserApplicationService(repository);
    const commandForSample: Required<RegisterUserCommand> = {
        user: sampleUser,
    };

    test('can update user', async () => {
        await registerUserApplicationService.execute(commandForSample);

        const updateSaltRounds = 10;
        const updatePassword = 'updatePassword';
        const updateSalt = bcrypt.genSaltSync(updateSaltRounds);
        const updateHashedPassword = bcrypt.hashSync(updatePassword, updateSalt);
        const updateUser = User.create(
            userId,
            new UserName('update'),
            new UserPassword(updateHashedPassword),
            new UserImage('update.jpg'),
        );
        const updateUserApplicationService = new UpdateUserApplicationService(repository);

        const commandForUpdate: Required<UpdateUserCommand> = {
            user: updateUser,
        };
        await updateUserApplicationService.execute(commandForUpdate);
        const updatedUser = await repository.findById(updateUser.userId);

        expect(updatedUser).toEqual(updateUser);
    });

    test('throw error if user not found', async () => {
        const updateSaltRounds = 10;
        const updatePassword = 'updatePassword';
        const updateSalt = bcrypt.genSaltSync(updateSaltRounds);
        const updateHashedPassword = bcrypt.hashSync(updatePassword, updateSalt);
        const updateUser = User.create(
            new UserId('update'),
            new UserName('update'),
            new UserPassword(updateHashedPassword),
            new UserImage('update.jpg'),
        );
        const updateUserApplicationService = new UpdateUserApplicationService(repository);

        const commandForUpdate: Required<UpdateUserCommand> = {
            user: updateUser,
        };
        await expect(updateUserApplicationService.execute(commandForUpdate)).rejects.toThrow();
    });
});
