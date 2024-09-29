import User from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repository/IUserRepository';
import UserDomainService from '../../../domain/service/UserDomainService';

export type UpdateUserCommand = {
    user: User;
};

export default class UpdateUserApplicationService {
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async execute(command: UpdateUserCommand): Promise<void> {
        const userDomainService = new UserDomainService(this.userRepository);

        await userDomainService.updateUser(command.user);
    }
}
