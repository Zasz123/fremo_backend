import { Request, Response, NextFunction } from "express";
import logger from "../../../../loaders/logger";
import { UserCheckExists } from "../../../../service/user";

const CheckExists = async (req: Request, res: Response, next: NextFunction) => {
  const { googleUid } = req.body;
  try {
    return await UserCheckExists(googleUid);
  } catch (error) {
    logger.error(error.message);
  }
};

export default CheckExists;
