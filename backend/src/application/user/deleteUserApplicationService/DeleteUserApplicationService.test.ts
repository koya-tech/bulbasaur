import bcrypt from 'bcrypt';
import User from '../../../domain/entities/User';
import UserId from '../../../domain/valueObject/user/UserId';
import UserImage from '../../../domain/valueObject/user/UserImage';
import UserName from '../../../domain/valueObject/user/UserName';
import UserPassword from '../../../domain/valueObject/user/UserPassword';
import InMemoryUserRepository from '../../../infrastructure/shared/InMemoryUserRepository';
import DeleteUserApplicationService, { DeleteUserCommand } from './DeleteUserApplicationService';
import RegisterUserApplicationService, { RegisterUserCommand } from '../registerUserApplicationService/RegisterUserApplicationService';

describe('RegisterUserApplicationService', () => {
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
    const repository = new InMemoryUserRepository();
    const deleteUserApplicationService = new DeleteUserApplicationService(repository);

    test('delete user correctly', async () => {
        const registerUserApplicationService = new RegisterUserApplicationService(repository);
        const commandForRegister: Required<RegisterUserCommand> = {
            user: sampleUser,
        };

        await registerUserApplicationService.execute(commandForRegister);

        const commandForDelete: Required<DeleteUserCommand> = {
            user: sampleUser,
        };

        await deleteUserApplicationService.execute(commandForDelete);
        const createdUser = await repository.findById(sampleUser.userId);

        expect(createdUser).toBeNull();
    });

    test('throw error if the same name user already exists in DB', async () => {
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

        const commandForDelete: Required<DeleteUserCommand> = {
            user: updateUser,
        };
        await expect(deleteUserApplicationService.execute(commandForDelete)).rejects.toThrow();
    });
});
