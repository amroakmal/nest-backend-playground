import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostRepository)
        private postRepository: PostRepository
    ) {}

    async createPost(postDto: CreatePostDto): Promise<PostEntity> {
        return this.postRepository.createPost(postDto);
    }
}
