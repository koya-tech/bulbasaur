import User from '../entities/User';
import UserId from '../valueObject/user/UserId';

export interface IUserRepository {

    save(user: User): Promise<void>;

    update(user: User): Promise<void>;

    deleteById(userId: UserId): Promise<void>;

    findById(userId: UserId): Promise<User | null>;
}
