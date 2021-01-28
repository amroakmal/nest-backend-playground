import { EntityRepository, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from './post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity>{
    async createPost(postDto: CreatePostDto): Promise<PostEntity> {
        const { caption, post } = postDto;
        const newPost = new PostEntity();

        newPost.caption = caption;
        newPost.post = post;

        await newPost.save();

        return newPost;
    }
}