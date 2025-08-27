import jwt from "jsonwebtoken"
import "dotenv/config"

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY";

export const generateAuthToken = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: "30d" });
}

export const decodeAuthToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET_KEY);
}
