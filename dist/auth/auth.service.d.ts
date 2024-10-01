import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import { ResponseDto } from 'src/common/dto/response_dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<UserEntity>);
    register(userDto: UserDto): Promise<ResponseDto<UserEntity>>;
    login(loginDto: LoginDto): Promise<ResponseDto<UserEntity>>;
}
