import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostSchema } from './entity/post.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]), // Đăng ký mô hình
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
