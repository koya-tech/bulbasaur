import User from '../entities/User';
import UserName from '../valueObject/user/UserName';

export interface IUserRepository {

    save(user: User): Promise<void>;

    update(user: User): Promise<void>;

    delete(userName: UserName): Promise<void>;

    find(userName: UserName): Promise<User | null>;
}
