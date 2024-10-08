import User from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repository/IUserRepository';
import UserId from '../../domain/valueObject/user/UserId';

export default class InMemoryUserRepository implements IUserRepository {
    public DB: {
        [id: string]: User;
    } = {};

    async save(user: User) {
        this.DB[user.userId.value.toString()] = user;
    }

    async update(user: User) {
        this.DB[user.userId.value.toString()] = user;
    }

    async deleteById(userId: UserId) {
        delete this.DB[userId.value.toString()];
    }

    async findById(userId: UserId): Promise<User | null> {
        const targetUser = Object.entries(this.DB)
            .find(([id]) => userId.value.toString() === id);

        return targetUser ? targetUser[1] : null;
    }

    async read(): Promise<User[] | null> {
        return Object.entries(this.DB).map((pair) => pair[1]);
    }
}
