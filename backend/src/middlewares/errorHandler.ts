import { NextFunction, Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode || 500;
    res.status(statusCode).send({ message: err.message || "Internal server error", stackTrace: err.stack })
}

export default errorHandler;