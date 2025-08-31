import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import { statusCodes } from "../utils/constants";
import { decodeAuthToken } from "../services/jwt";
import { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
    userId?: string | JwtPayload;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(" ")[1];

    if (token) {
        const decoded = decodeAuthToken(token);
        if (decoded) {
            req.userId = decoded;
            next()
        } else {
            throw new AppError('INVALID_TOKEN', statusCodes.UNAUTHORIZED);
        }
    } else {
        throw new AppError("Unauthorized", statusCodes.UNAUTHORIZED);
    }
}

export default authMiddleware;