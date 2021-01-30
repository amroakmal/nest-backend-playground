import { EntityRepository, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from './post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity>{
    async createPost(postDto: CreatePostDto): Promise<PostEntity> {
        const { caption, options } = postDto;
        let newPost = new PostEntity();
        
        newPost.caption = caption;
        newPost.options = options;
        
        newPost = await newPost.save();
        console.log("New Post: ", newPost);
        
        return newPost;
    }

    async getAllPosts(): Promise<PostEntity[]> {
        const posts = await this.createQueryBuilder('post')
                            .leftJoinAndSelect("post.options", "options")
                            .getMany();        
        return posts;
    }
}