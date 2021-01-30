import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from '../posts/post.entity';

@Entity()
export class Options extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    optionBody: string;

    @ManyToOne(() => Posts, post => post.options, { eager: false })
    post: Posts;

    constructor(optionBody: string) {
        super();
        this.optionBody = optionBody;
    }
}