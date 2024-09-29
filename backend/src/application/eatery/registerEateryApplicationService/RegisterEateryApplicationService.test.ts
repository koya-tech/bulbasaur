import InMemoryEateryRepository from '../../../infrastructure/shared/InMemoryEateryRepository';
import { sampleEatery } from '../testEateryData';
import RegisterEateryApplicationService, { RegisterEateryCommand } from './RegisterEateryApplicationService';

describe('RegisterEateryApplicationService', () => {
    test('register eatery correctly', async () => {
        const repository = new InMemoryEateryRepository();
        const registerEateryApplicationService = new RegisterEateryApplicationService(repository);

        const command: Required<RegisterEateryCommand> = {
            eatery: sampleEatery,
        };

        await registerEateryApplicationService.execute(command);
        const createdEatery = await repository.findById(sampleEatery.eateryId);

        expect(createdEatery).not.toBeNull();
    });

    test('throw error if the same name eatery already exists in DB', async () => {
        const repository = new InMemoryEateryRepository();
        const registerEateryApplicationService = new RegisterEateryApplicationService(repository);

        const command: Required<RegisterEateryCommand> = {
            eatery: sampleEatery,
        };

        await registerEateryApplicationService.execute(command);

        await expect(registerEateryApplicationService.execute(command)).rejects.toThrow();
    });
});
