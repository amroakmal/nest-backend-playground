import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        @Inject(UsersService)
        private userService: UsersService
    ) {}

    @Post('/register')
    async regitser(
        @Body() registerUserDto: RegisterUserDto
    ) {
        console.log(registerUserDto);
        
        const newUser = await this.userService.register(registerUserDto);

        return {
            id: newUser.id,
            username: newUser.username
        }
    }
}
