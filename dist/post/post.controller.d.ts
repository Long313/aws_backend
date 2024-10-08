import { PostService } from './post.service';
import { PostEntity } from './entity/post.entity';
import { PostDto } from './dto/post.dto';
import { ResponseDto } from 'src/common/dto/response_dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAllPosts(): Promise<ResponseDto<PostEntity[]>>;
    createPost(postDto: PostDto): Promise<ResponseDto<PostEntity>>;
    getPost(id: string): Promise<ResponseDto<PostEntity>>;
    increaseView(id: string): Promise<ResponseDto<PostEntity>>;
    increaseLike(id: string): Promise<ResponseDto<PostEntity>>;
    updatePost(id: string, postDto: PostDto): Promise<ResponseDto<PostEntity>>;
}
