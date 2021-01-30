import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
    constructor(
        private postService: PostsService
    ) {}

    @Post()
    createPost (
        @Body() createPostDto: CreatePostDto): Promise<PostEntity> {                
       return this.postService.createPost(createPostDto); 
    }

    @Get()
    getAllPosts () {                
       return this.postService.getAllPosts(); 
    }
}
