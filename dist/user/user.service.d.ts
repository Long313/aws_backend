import { Model } from 'mongoose';
import { UserEntity } from './entity/user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserEntity>);
    findAll(): Promise<UserEntity[]>;
}
