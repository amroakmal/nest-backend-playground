import { Max, Min } from "class-validator";

export class LoginUserDto {
    @Min(4)
    @Max(20)
    username: string;

    @Min(8)
    password: string;
}