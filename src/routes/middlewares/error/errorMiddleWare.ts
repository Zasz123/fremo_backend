import { Request, Response, NextFunction } from "express";

import { IError } from "./errorTypes";

export default function customErrorMiddleware(
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(error.statusCode).json({
    success: false,
    error,
  });
}
