import InMemoryUserRepository from '../../../infrastructure/shared/InMemoryUserRepository';
import DeleteUserApplicationService, { DeleteUserCommand } from './DeleteUserApplicationService';
import RegisterUserApplicationService, { RegisterUserCommand } from '../registerUserApplicationService/RegisterUserApplicationService';
import { sampleUser, updateUser } from '../testUserData';

describe('RegisterUserApplicationService', () => {
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
        const deletedUser = await repository.findById(sampleUser.userId);

        expect(deletedUser).toBeNull();
    });

    test('throw error if the same name user already exists in DB', async () => {
        const commandForDelete: Required<DeleteUserCommand> = {
            user: updateUser,
        };
        await expect(deleteUserApplicationService.execute(commandForDelete)).rejects.toThrow();
    });
});
