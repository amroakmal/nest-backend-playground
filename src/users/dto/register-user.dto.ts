import { Max, MAX, Min } from "class-validator";

export class RegisterUserDto {
    @Min(4)
    @Max(20)
    username: string;

    @Min(8)
    password: string;
}