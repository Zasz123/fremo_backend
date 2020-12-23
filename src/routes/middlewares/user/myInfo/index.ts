import { Request, Response, NextFunction } from "express";
import { UserMyInfo } from "../../../../service/user";
import { IUserMyInfo } from "../../../../interfaces/User";
import logger from "../../../../loaders/logger";
import { verifyToken } from "../../../../utils/jwt";

const myInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { token }: IUserMyInfo = req.body;
  try {
    const tokenData = verifyToken(token);

    const user = await UserMyInfo(tokenData.id);

    res.json({
      success: true,
      id: user.id,
      accountId: user.accountId,
      name: user.name,
      createdAt: user.createdAt,
    });
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default myInfo;
