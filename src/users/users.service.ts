import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { RegisterUserDto } from './dto/register-user.dto';
import { Users } from './user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async register(registerUserDto: RegisterUserDto): Promise<void> {
        return this.userRepository.register(registerUserDto);
    }

    async login(loginUserDto: LoginUserDto) {
        const username = await this.userRepository.login(loginUserDto);

        if(!username) {
            throw new UnauthorizedException("Unauthorized data provided. Please check your username or password");
        }
    }

    async getAllUsers(): Promise<Users[]> {
        return this.userRepository.getAllUsers();
    }
}
