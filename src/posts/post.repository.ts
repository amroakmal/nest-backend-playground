import { EntityRepository, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from './post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity>{
    async createPost(postDto: CreatePostDto): Promise<PostEntity> {
        const { caption, options } = postDto;
        const newPost = new PostEntity();
        console.log( options);
        
        newPost.caption = caption;
        newPost.options = options;
        
        await newPost.save();
        
        return newPost;
    }
}