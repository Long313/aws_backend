import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/entity/user.entity';
import { ResponseDto } from 'src/common/dto/response_dto';
import { UserDto } from 'src/user/dto/user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(userDto: UserDto): Promise<ResponseDto<UserEntity>>;
    login(loginDto: LoginDto): Promise<ResponseDto<UserEntity>>;
}
