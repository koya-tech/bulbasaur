import User from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repository/IUserRepository';
import UserDomainService from '../../../domain/service/UserDomainService';

export type DeleteUserCommand = {
    user: User;
};

export default class DeleteUserApplicationService {
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async execute(command: DeleteUserCommand): Promise<void> {
        const userDomainService = await new UserDomainService(this.userRepository);

        await userDomainService.deleteUser(command.user.userId);
    }
}
