import { OptionEntity } from '../../options/option.entity';
export class CreatePostDto {
    caption: string;
    options: OptionEntity[]
}