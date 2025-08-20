import jwt from "jsonwebtoken"
import "dotenv/config"

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY";

const generateToken = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET_KEY, {expiresIn: "30d"})
}

export default generateToken;