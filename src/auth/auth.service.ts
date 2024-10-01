import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { ResponseDto } from 'src/common/dto/response_dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<UserEntity>) {}
  async register(userDto: UserDto): Promise<ResponseDto<UserEntity>> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = new UserEntity({
      name: userDto.name,
      birthday: new Date(userDto.birthday),
      email: userDto.email,
      password: hashedPassword,
      gender: userDto.gender,
    });
    const isExist = await this.userModel.findOne({
      name: user.name,
      birthday: user.birthday,
      email: user.email,
    });
    if (isExist) {
      return new ResponseDto<UserEntity>(
        HttpStatus.BAD_REQUEST,
        null,
        'User already exist',
      );
    }
    try {
      const savedUser = await user.save();
      if (savedUser) {
        return new ResponseDto<UserEntity>(
          HttpStatus.OK,
          savedUser,
          'User created successfully',
        );
      } else {
        return new ResponseDto<UserEntity>(
          HttpStatus.BAD_REQUEST,
          null,
          'User created failed',
        );
      }
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
  async login(loginDto: LoginDto): Promise<ResponseDto<UserEntity>> {
    const isExist = await this.userModel.findOne({
      email: loginDto.email,
    });
    console.log('isExist', isExist);
    console.log('password', isExist.password);
    if (!isExist) {
      throw new Error('User does not exist');
    }
    const passwordMatches = bcrypt.compare(loginDto.password, isExist.password);
    if (passwordMatches) {
      return new ResponseDto<UserEntity>(HttpStatus.OK, null, 'Login success');
    } else if (!passwordMatches) {
      throw new Error('Password is incorrect');
    } else {
      throw new Error('Login failed');
    }
  }
}
