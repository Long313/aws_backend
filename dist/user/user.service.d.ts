import { Model } from 'mongoose';
import { User } from './user.interface';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
}
