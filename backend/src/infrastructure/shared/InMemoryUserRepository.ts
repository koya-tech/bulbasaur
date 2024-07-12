import User from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import UserId from '../../domain/valueObject/user/UserId';

export default class InMemoryUserRepository implements IUserRepository {
    public DB: {
        [id: string]: User;
    } = {};

    async save(user: User) {
        this.DB[user.userId.value] = user;
    }

    async update(user: User) {
        this.DB[user.userId.value] = user;
    }

    async delete(userId: UserId) {
        delete this.DB[userId.value];
    }

    async find(user: User): Promise<User | null> {
        const targetUser = Object.entries(this.DB)
            .find(([id]) => user.userId.value === this.DB[id].userId.value);

        return targetUser ? targetUser[1] : null;
    }
}
