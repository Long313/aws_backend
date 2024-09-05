import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema'; // Thêm schema User

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Đăng ký mô hình
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Xuất UserService nếu cần sử dụng ở module khác
})
export class UserModule {}
