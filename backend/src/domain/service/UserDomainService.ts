import User from '../entities/User';
import { IUserRepository } from '../repository/IUserRepository';

export default class UserDomainService {
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async IsUserNameDuplicateCheck(user: User) {
        const duplicateUserName = await this.userRepository.findById(user.userId);
        const isDuplicateUserName = !!duplicateUserName;
        return isDuplicateUserName;
    }

    async registerUser(user: User): Promise<void> {
        if (await this.IsUserNameDuplicateCheck(user)) {
            throw new Error('UserName is already in use.');
        }
        await this.userRepository.save(user);
    }

    async deleteUser(user: User): Promise<void> {
        const targetUser = await this.userRepository.findById(user.userId);
        if (!targetUser) {
            throw new Error('User not found.');
        }
        await this.userRepository.deleteById(targetUser.userId);
    }

    async updateUser(user: User): Promise<void> {
        const targetUser = await this.userRepository.findById(user.userId);
        if (!targetUser) {
            throw new Error('User not found.');
        }
        await this.userRepository.update(user);
    }
}
