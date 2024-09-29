import bcrypt from 'bcrypt';
import User from '../../../domain/entities/User';
import UserId from '../../../domain/valueObject/user/UserId';
import UserImage from '../../../domain/valueObject/user/UserImage';
import UserName from '../../../domain/valueObject/user/UserName';
import UserPassword from '../../../domain/valueObject/user/UserPassword';
import InMemoryUserRepository from '../../../infrastructure/shared/InMemoryUserRepository';
import RegisterUserApplicationService, { RegisterUserCommand } from './RegisterUserApplicationService';

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

    test('register user correctly', async () => {
        const repository = new InMemoryUserRepository();
        const registerUserApplicationService = new RegisterUserApplicationService(repository);

        const command: Required<RegisterUserCommand> = {
            user: sampleUser,
        };

        await registerUserApplicationService.execute(command);
        const createdUser = await repository.findById(sampleUser.userId);

        expect(createdUser).not.toBeNull();
    });

    test('throw error if the same name user already exists in DB', async () => {
        const repository = new InMemoryUserRepository();
        const registerUserApplicationService = new RegisterUserApplicationService(repository);

        const command: Required<RegisterUserCommand> = {
            user: sampleUser,
        };

        await registerUserApplicationService.execute(command);

        await expect(registerUserApplicationService.execute(command)).rejects.toThrow();
    });
});
