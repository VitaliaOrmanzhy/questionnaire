import { IUser } from "../../models/user";
import { LoginUserDto } from "./LoginUser.dto";

export interface UserInfoDto {
    userInfo: Pick<IUser, "username" | "email"> & { _id: string; token: string}
}