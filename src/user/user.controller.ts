import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();

    // Chuyển đổi User[] sang UserEntity[]
    return plainToInstance(UserEntity, users);
  }
}
