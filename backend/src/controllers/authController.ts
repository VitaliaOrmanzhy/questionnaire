import { Transporter } from './../../node_modules/@types/nodemailer/index.d';
import { Request, Response } from "express";
import { RegisterUserDto } from "../dtos/auth/RegisterUser.dto";
import { User } from "../models/user";
import { generateAuthToken } from "../services/jwt";
import { LoginUserDto } from "../dtos/auth/LoginUser.dto";
import { ForgotPasswordDto } from "../dtos/auth/ForgotPassword.dto";
import "dotenv/config";
import generateResetPasswordToken from "../utils/generateResetPasswordToken";
import { sendSimpleEmail } from "../services/emailService";
import { UserInfoDto } from '../dtos/auth/User.dto';
import { ChangePasswordDto } from '../dtos/auth/ChangePassword.dto';
import AppError from '../utils/AppError';
import { statusCodes } from '../utils/constants';

export const registerUser = async (req: Request<{}, {}, RegisterUserDto>, res: Response<UserInfoDto>) => {
    const { username, email, password } = req.body; 

    // whether the user already exists
    const userExists = await User.findByEmail(email);

    if (userExists) {
        return res.status(400);
    }

    const user = await User.create({ username, email, password });
    if (user) {
        const token = generateAuthToken(user._id as unknown as string);
        return res.status(201).send({
            userInfo: {
                _id: user._id as string,
                username: user.username,
                email: user.email,
                token,
            }
        })
    } else {
       res.status(400);
    }
}

export const loginUser = async (req: Request<{}, {}, LoginUserDto>, res: Response<UserInfoDto>) => {
    const { email, password } = req.body;
    // find user by email
    const user = await User.findOne({ email });
    // if user exists and password matches, generate token
    if (user && (await user.matchPassword(password))) {
        const token = generateAuthToken(user._id as unknown as string);
        return res.status(200).send({
            userInfo: {
                _id: user._id as string,
                username: user.username,
                email: user.email,
                token
            }
        })
    } else {
        return res.status(401);
    }
}

export const forgotPassword = async (req: Request<{}, {}, ForgotPasswordDto>, res: Response) => {
    const { email } = req.body;
    const user = await User.findByEmail(email);
    // if user exists
    if (user) {
        // generate resetPasswordToken
        const token = generateResetPasswordToken();
        // setting token to user
        await User.updateOne({ email }, { resetPasswordToken: token });

        const mailOptions = {
            from: "Questionnaire",
            to: email,
            subject: "Reset your password",
            text: `You (${email}) have requested to reset your password`, // plain‑text body
            html: `<a href=\"http://localhost:5173/reset-password/${token}\">Reset</a>`, // HTML body
        };

        // sending an email
        const info = await sendSimpleEmail(mailOptions);
        
        if (info) {
            res.send(200)
        } else {
            return res.send(500);
        }
    } else {
        throw new AppError("User isn't found", statusCodes.NOT_FOUND);
    }
}

export const changePassword = async (req: Request<ChangePasswordDto>, res: Response) => {
    const { newPassword, token } = req.body;

    const user = await User.findByResetToken(token);

    if (user) {
        user.password = newPassword;
        delete user.resetPasswordToken;
        await user.save();
        res.send(200);
    } else {
        throw new AppError("User not found", statusCodes.NOT_FOUND);
    }
}