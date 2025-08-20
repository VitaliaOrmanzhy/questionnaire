import type { FormikTouched } from "formik";
import type { User } from "./user";

export type LoginFormValues = Pick<User, "email" | "password">;
export type RegisterFormValues = Omit<User, "token">;

export type Errors = {
    [key: string]: string;
};

export type Touched = FormikTouched<RegisterFormValues | LoginFormValues>;
