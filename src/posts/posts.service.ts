import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './post.entity';
import { PostRepository } from './post.repository';
import { Options } from '../options/option.entity';
import { OptionsRepository } from '../options/options.repository';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostRepository)
        private postRepository: PostRepository,

        @InjectRepository(Options)
        private optionRepository: OptionsRepository
    ) {}

    async createPost(postDto: CreatePostDto, options: Options[]): Promise<Posts> {
        //create the needed options
        
        let postOptions = await this.optionRepository.createOptions(options);
        
        //return the created new post with its options
        return this.postRepository.createPost(postDto, postOptions);
    }

    async getAllPosts(): Promise<Posts[]> {
        return this.postRepository.getAllPosts();
    }
}
