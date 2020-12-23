import { Request, Response, NextFunction } from "express";

import logger from "../../../../loaders/logger";
import { UserRegister } from "../../../../service/user";
import { IUserRegister } from "../../../../interfaces/User";

const Register = async (req: Request, res: Response, next: NextFunction) => {
  const { accountId, password, name }: IUserRegister = req.body;
  try {
    await UserRegister({
      accountId,
      password,
      name,
    });

    res.json({
      success: true,
    });
  } catch (err) {
    logger.error(err.message);
  }
};

export default Register;
