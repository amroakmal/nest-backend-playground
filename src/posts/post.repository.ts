import { EntityRepository, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { Posts } from './post.entity';
import { Options } from '../options/option.entity';

@EntityRepository(Posts)
export class PostRepository extends Repository<Posts>{
    async createPost(postDto: CreatePostDto, options: Options[]): Promise<Posts> {        
        const { caption } = postDto;     
        let newPost = new Posts(caption, options);

        newPost = await newPost.save();
        
        return newPost;
    }

    async getAllPosts(): Promise<Posts[]> {
        const posts = await this.createQueryBuilder('post')
                            .leftJoinAndSelect("post.options", "options")
                            .getMany();        
        return posts;
    }
}