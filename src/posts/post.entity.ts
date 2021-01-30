import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OptionEntity } from '../options/option.entity';

@Entity()
export class PostEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    caption: string;

    @OneToMany(() => OptionEntity, options => options.post)
    options: OptionEntity[];
}