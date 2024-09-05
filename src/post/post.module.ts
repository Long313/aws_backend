import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:@Long12345@aws.qxyab.mongodb.net/?retryWrites=true&w=majority&appName=aws',
    ),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
