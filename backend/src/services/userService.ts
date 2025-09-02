import { IUserDocument, User } from "../models/user";

export class UserService {
  static async findUserById(id: string): Promise<IUserDocument | null> {
    const user = await User.findById(id).select(
      "-password -resetPasswordToken"
    );
    return user;
  }
}
