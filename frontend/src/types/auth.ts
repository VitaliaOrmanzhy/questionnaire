export type User = {
    username: string;
    email: string;
    password: string;
    token: string;
}

export type UserInfo = {
    userInfo: User;
}

export type LoginFormValues = Pick<User, "email" | "password">;
export type RegisterFormValues = Omit<User, "token">;