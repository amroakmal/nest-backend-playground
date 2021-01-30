import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostEntity } from '../posts/post.entity';

@Entity()
export class OptionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => PostEntity, post => post.options)
    post: PostEntity;
}