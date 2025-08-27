import { LoginUserDto } from "./LoginUser.dto";

export interface RegisterUserDto extends LoginUserDto {
    username: string;
}