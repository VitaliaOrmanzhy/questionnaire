import { UserService } from "./../services/userService";
import { NextFunction, Response } from "express";
import AppError from "../utils/AppError";
import { statusCodes } from "../utils/constants";
import { decodeAuthToken } from "../services/jwt";
import { IAuthenticateRequest } from "../types/request";
import { IUserDocument, User } from "../models/user";

const authMiddleware = async (
  req: IAuthenticateRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];

  if (token) {
    const decoded = decodeAuthToken(token) as { [key: string]: string };
    if (decoded.id) {
      // find User by id
      const user = (await UserService.findUserById(
        decoded.id
      )) as IUserDocument;

      if (user) {
        req.user = user;
      }

      next();
    } else {
      throw new AppError("INVALID_TOKEN", statusCodes.UNAUTHORIZED);
    }
  } else {
    throw new AppError("Unauthorized", statusCodes.UNAUTHORIZED);
  }
};

export default authMiddleware;
