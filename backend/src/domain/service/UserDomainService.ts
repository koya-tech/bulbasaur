import User from '../entities/User';
import { IUserRepository } from '../repository/IUserRepository';
import UserName from '../valueObject/user/UserName';

export default class UserDomainService {
    constructor(
        private userRepository: IUserRepository,
    ) { }

    async IsUserNameDuplicateCheck(userName: UserName) {
        const duplicateUserName = await this.userRepository.find(userName);
        const isDuplicateUserName = !!duplicateUserName;
        return isDuplicateUserName;
    }

    async registerUser(user: User): Promise<User> {
        if (!this.IsUserNameDuplicateCheck(user.userName)) {
            throw new Error('UserName is already in use.');
        }
        await this.userRepository.save(user);
        return user;
    }

    async deleteUser(user: User): Promise<void> {
        const targetUser = await this.userRepository.find(user.userName);
        if (!targetUser) {
            throw new Error('User not found.');
        }
        await this.userRepository.delete(targetUser.userName);
    }
}
