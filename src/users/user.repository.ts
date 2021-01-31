import { EntityRepository, Repository } from "typeorm";
import { Users } from './user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
    async register(registerUserDto: RegisterUserDto): Promise<Users> {
        try {
            const { username, password } = registerUserDto;
            console.log(username, " ", password);
            
            const generateSalt = await bcrypt.genSalt();
            const HashedPassword = await bcrypt.hash(password, generateSalt);
            let user = new Users(username, HashedPassword, generateSalt);
            console.log(user);
            user =  await user.save();
            console.log("AFTER SAVE");
            return user;
        } catch(error) {
            if(error.code === '23505') {
                throw new ConflictException(`Username already exists`)
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}