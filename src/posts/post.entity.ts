import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Options } from '../options/option.entity';

@Entity()
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    caption: string;

    @OneToMany(() => Options, options => options.post, { eager: true })
    options: Options[];

    constructor(
        caption: string,
        options: Options[]
    ) {
        super();
        this.caption = caption;
        this.options = options;
    }
}