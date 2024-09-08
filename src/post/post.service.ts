import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostEntity } from './entity/post.entity';
import { Model, Types } from 'mongoose';
import { PostDto } from './dto/post.dto';
import Post from './schema/post.model';
import { ResponseDto } from 'src/common/dto/respon_dto';
import { BSON } from 'mongodb';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private postModel: Model<PostEntity>) {}
  async findAll(): Promise<PostEntity[]> {
    return this.postModel.find().exec();
  }

  async create(postDto: PostDto): Promise<ResponseDto<PostEntity>> {
    const post = new Post({
      title: postDto.title,
      description: postDto.description,
      author: postDto.author,
      likes: 0,
      views: 0,
    });
    const isExist = await this.postModel.findOne({
      title: postDto.title,
      description: postDto.description,
      author: postDto.author,
    });
    if (isExist) {
      return new ResponseDto<PostEntity>(
        HttpStatus.BAD_REQUEST,
        null,
        'User already exist',
      );
    }
    try {
      const savedPost = await post.save();
      if (savedPost) {
        return new ResponseDto<PostEntity>(
          HttpStatus.OK,
          savedPost,
          'User created successfully',
        );
      } else {
        return new ResponseDto<PostEntity>(
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

  async findOne(id: string): Promise<ResponseDto<PostEntity>> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const nid = new BSON.ObjectId(id);
    try {
      const post = await this.postModel.findOne({
        _id: nid,
      });
      return new ResponseDto<PostEntity>(
        HttpStatus.OK,
        post,
        'User created successfully',
      );
    } catch (error) {
      throw new Error(`Error get post: ${error.message}`);
    }
  }

  async increaseView(id: string): Promise<ResponseDto<PostEntity>> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const nid = new BSON.ObjectId(id);
    const post = await this.postModel.findOne({
      _id: nid,
    });
    try {
      const newPost = await this.postModel.findByIdAndUpdate(
        nid,
        {
          ...post,
          views: post.views++,
        },
        { new: true },
      );

      return new ResponseDto<PostEntity>(
        HttpStatus.OK,
        newPost,
        'View of post increase 1 point',
      );
    } catch (error) {
      throw new Error(`Error post: ${error.message}`);
    }
  }

  async increaseLike(id: string): Promise<ResponseDto<PostEntity>> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const nid = new BSON.ObjectId(id);
    const post = await this.postModel.findOne({
      _id: nid,
    });
    try {
      const newPost = await this.postModel.findByIdAndUpdate(
        nid,
        {
          ...post,
          likes: post.likes++,
        },
        { new: true },
      );

      return new ResponseDto<PostEntity>(
        HttpStatus.OK,
        newPost,
        'Like of post increase 1 point',
      );
    } catch (error) {
      throw new Error(`Error post: ${error.message}`);
    }
  }
}
