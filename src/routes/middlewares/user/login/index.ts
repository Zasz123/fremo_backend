import { Request, Response, NextFunction } from "express";

import logger from "../../../../loaders/logger";
import { UserLogin } from "../../../../service/user";
import { IUserLogin } from "../../../../interfaces/User";

const Login = async (req: Request, res: Response, next: NextFunction) => {
  const { accountId, password }: IUserLogin = req.body;
  try {
    const token = await UserLogin({ accountId, password });

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    logger.error(error.message);
  }
};

export default Login;
