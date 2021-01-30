import { EntityRepository, Repository } from "typeorm";
import { Options } from './option.entity';

@EntityRepository(Options)
export class OptionsRepository extends Repository<Options> {
    async createOptions(options: Options[]): Promise<Options[]> {
        let postOptions = [];
        console.log("AT option repo");
        
        for(const option of options) {
            let newOption = new Options(option.optionBody);
            console.log("New opt: ", newOption);
            
            newOption = await newOption.save();
            
            console.log("AMR", postOptions);
            
            postOptions.push(newOption);
        }
        console.log("END OPT REPO");
        
        return postOptions;
    }
}