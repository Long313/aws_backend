import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { ResponseDto } from 'src/common/dto/respon_dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Get()
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();

    // Chuyển đổi User[] sang UserEntity[]
    return plainToInstance(UserEntity, users);
  }

  @Post()
  async create(@Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
    // Lưu UserEntity thông qua service
    return this.userService.create(userDto);
  }
}
