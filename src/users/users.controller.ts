import { Body, Controller, Get, Inject, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { Users } from './user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        @Inject(UsersService)
        private userService: UsersService
    ) {}

    @Post('/register')
    async regitser(
        @Body() registerUserDto: RegisterUserDto): Promise<void> {        
        return await this.userService.register(registerUserDto);
    }

    @Post('/login')
    async login(
        @Body() loginUserDto: LoginUserDto) {        
        return await this.userService.login(loginUserDto);
    }

    @Get()
    async getAllUsers(): Promise<Users[]> {
        return await this.userService.getAllUsers();
    }
}
