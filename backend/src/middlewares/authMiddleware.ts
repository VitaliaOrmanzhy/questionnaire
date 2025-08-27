import { NextFunction, Request } from "express";
import AppError from "../utils/AppError";
import { statusCodes } from "../utils/constants";
import { decodeAuthToken } from "../services/jwt";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(" ")[1];

    if (token) {
        const decoded = decodeAuthToken(token);
        if (decoded) {
            next()
        } else {
            throw new AppError('INVALID_TOKEN', statusCodes.UNAUTHORIZED);
        }
    } else {
        throw new AppError("Unauthorized", statusCodes.UNAUTHORIZED);
    }
}

export default authMiddleware;