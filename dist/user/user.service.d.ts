import { Model } from 'mongoose';
import { UserEntity } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { ResponseDto } from 'src/common/dto/respon_dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    create(userDto: UserDto): Promise<ResponseDto<UserEntity>>;
}
