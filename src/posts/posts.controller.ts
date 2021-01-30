import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './post.entity';
import { Options } from '../options/option.entity';

@Controller('posts')
export class PostsController {
    constructor(
        private postService: PostsService
    ) {}

    @Post()
    createPost (
        @Body() createPostDto: CreatePostDto,
        @Body('options') options: Options[]): Promise<Posts> {                
       return this.postService.createPost(createPostDto, options); 
    }

    @Get()
    async getAllPosts () {                
       return await this.postService.getAllPosts(); 
    }
}
