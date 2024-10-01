import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/entity/user.entity';
import { ResponseDto } from 'src/common/dto/response_dto';
import { UserDto } from 'src/user/dto/user.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
    return this.authService.register(userDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto<UserEntity>> {
    return this.authService.login(loginDto);
  }
}
