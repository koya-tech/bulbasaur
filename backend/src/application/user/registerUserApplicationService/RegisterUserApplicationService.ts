import User from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repository/IUserRepository';
import UserDomainService from '../../../domain/service/UserDomainService';

export type RegisterUserCommand = {
    user: User;
};

export default class RegisterUserApplicationService {
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async execute(command: RegisterUserCommand): Promise<void> {
        const userDomainService = await new UserDomainService(this.userRepository);

        await userDomainService.registerUser(command.user);
    }
}
