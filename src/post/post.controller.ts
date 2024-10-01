import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostEntity } from './entity/post.entity';
import { PostDto } from './dto/post.dto';
import { ResponseDto } from 'src/common/dto/response_dto';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/all')
  async getAllPosts(): Promise<ResponseDto<PostEntity[]>> {
    return this.postService.findAll();
  }

  @Post()
  async createPost(@Body() postDto: PostDto): Promise<ResponseDto<PostEntity>> {
    return this.postService.create(postDto);
  }

  @Get('/:id')
  async getPost(@Param('id') id: string): Promise<ResponseDto<PostEntity>> {
    return this.postService.findOne(id);
  }

  @Put('/views/:id')
  async increaseView(
    @Param('id') id: string,
  ): Promise<ResponseDto<PostEntity>> {
    return this.postService.increaseView(id);
  }

  @Put('/likes/:id')
  async increaseLike(
    @Param('id') id: string,
  ): Promise<ResponseDto<PostEntity>> {
    return this.postService.increaseLike(id);
  }

  @Put('/update/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() postDto: PostDto,
  ): Promise<ResponseDto<PostEntity>> {
    return this.postService.update(id, postDto);
  }
}
