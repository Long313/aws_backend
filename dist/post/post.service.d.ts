import { PostEntity } from './entity/post.entity';
import { Model } from 'mongoose';
import { PostDto } from './dto/post.dto';
import { ResponseDto } from 'src/common/dto/respon_dto';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<PostEntity>);
    findAll(): Promise<ResponseDto<PostEntity[]>>;
    create(postDto: PostDto): Promise<ResponseDto<PostEntity>>;
    update(id: string, postDto: PostDto): Promise<ResponseDto<PostEntity>>;
    findOne(id: string): Promise<ResponseDto<PostEntity>>;
    increaseView(id: string): Promise<ResponseDto<PostEntity>>;
    increaseLike(id: string): Promise<ResponseDto<PostEntity>>;
}
