import { EntityRepository, Repository } from "typeorm";
import { Users } from './user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from './dto/login-user.dto';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
    async register(registerUserDto: RegisterUserDto): Promise<void> {
        try {
            const { username, password } = registerUserDto;            
            const generateSalt = await bcrypt.genSalt();
            const HashedPassword = await bcrypt.hash(password, generateSalt);
            let user = new Users(username, HashedPassword, generateSalt);

            await user.save();            
        } catch(error) {
            if(error.code === '23505') {
                throw new ConflictException(`Username already exists`)
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async login(loginUserDto: LoginUserDto) {
        try {
            const { username, password } = loginUserDto;            
            const user = await this.findOne({ username });
            
            if(user && (await user.validatePassword(password))) {
                return user.username;
            } 
            return null;
        } catch(error) {
            throw new UnauthorizedException(`Wrong username or password!`);
        }
    }

    async getAllUsers(): Promise<Users[]> {
        const query = this.createQueryBuilder('user');         
        const users = await query.getMany();

        return users;
    }
}