import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }
}
