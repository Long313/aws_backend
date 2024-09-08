import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Thêm dòng này
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tranxuanlonga555:%40Long12345@aws.95kyn.mongodb.net/?retryWrites=true&w=majority&appName=aws',
    ), // Kết nối với MongoDB
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
