import { BadRequestException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Options } from './option.entity';

@EntityRepository(Options)
export class OptionsRepository extends Repository<Options> {
    async createOptions(options: Options[]): Promise<Options[]> {
        let postOptions = [];
    
        for(const option of options) {
            let newOption = new Options(option.optionBody);
            
            newOption = await newOption.save();
            
            postOptions.push(newOption);
        }
        
        return postOptions;
    }
}