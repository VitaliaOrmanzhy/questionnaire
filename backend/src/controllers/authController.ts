import { Request, Response } from "express";
import { RegisterUserDto } from "../dtos/RegisterUser.dto";
import { User } from "../models/user";
import generateToken from "../utils/generateToken";

export const registerUser = async (req: Request<{}, {}, RegisterUserDto>, res: Response) => {
    const { username, email, password } = req.body; 

    // whether the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).send({ message: "User already exists" });
    }

    const user = await User.create({ username, email, password });
    if (user) {
        return res.status(201).send({
            userInfo: {
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id.toString()),
            }
        })
    } else {
       res.status(400).json({ message: 'Invalid user data' });
    }

}