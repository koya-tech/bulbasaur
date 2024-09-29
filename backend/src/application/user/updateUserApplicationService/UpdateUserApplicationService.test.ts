import InMemoryUserRepository from '../../../infrastructure/shared/InMemoryUserRepository';
import UpdateUserApplicationService, { UpdateUserCommand } from './UpdateUserApplicationService';
import RegisterUserApplicationService, { RegisterUserCommand } from '../registerUserApplicationService/RegisterUserApplicationService';
import { differentUser, sampleUser, updateUser } from '../testUserData';

describe('UpdateUserApplicationService', () => {
    const repository = new InMemoryUserRepository();
    const registerUserApplicationService = new RegisterUserApplicationService(repository);
    const updateUserApplicationService = new UpdateUserApplicationService(repository);
    const commandForSample: Required<RegisterUserCommand> = {
        user: sampleUser,
    };
    const commandForUpdate: Required<UpdateUserCommand> = {
        user: updateUser,
    };

    const commandDifferent: Required<UpdateUserCommand> = {
        user: differentUser,
    };

    test('can update user', async () => {
        await registerUserApplicationService.execute(commandForSample);

        await updateUserApplicationService.execute(commandForUpdate);
        const updatedUser = await repository.findById(updateUser.userId);

        expect(updatedUser).toEqual(updateUser);
    });

    test('throw error if user not found', async () => {
        await expect(updateUserApplicationService.execute(commandDifferent)).rejects.toThrow();
    });
});
