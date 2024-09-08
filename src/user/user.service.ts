import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import User from './schema/user.model';
import { ResponseDto } from 'src/common/dto/respon_dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  async create(userDto: UserDto): Promise<ResponseDto<UserEntity>> {
    console.log('User DTO:', userDto);
    const hashedPassword = await bcrypt.hash(userDto.password, 10); // 10 là số lần băm

    const user = new User({
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
    console.log('isExist', isExist);
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
      console.error('Error saving user:', error);
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // async validateUser(email: string, password: string): Promise<UserEntity | null> {
  //   const user = await this.userModel.findOne({ email }).exec();
  //   if (user && await bcrypt.compare(password, user.password)) {
  //     return user;
  //   }
  //   return null;
  // }
}
