import { LoginUserDto } from "./LoginUser.dto";

export type RegisterUserDto = LoginUserDto & {
    username: string;
}