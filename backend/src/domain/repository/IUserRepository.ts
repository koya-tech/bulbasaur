import User from '../entities/User';
import UserId from '../valueObject/user/UserId';

export interface IUserRepository {

    save(user: User): Promise<void>;

    update(user: User): Promise<void>;

    delete(userId: UserId): Promise<void>;

    find(user: User): Promise<User | null>;
}
