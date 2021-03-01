import { Request, Response, NextFunction } from "express";
import { UserMyInfo } from "../../../../service/user";
import logger from "../../../../loaders/logger";
import { verifyToken } from "../../../../utils/jwt";

const myInfo = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token;
  try {
    if (typeof token !== "string") {
      throw new Error("token is not valid");
    }

    const tokenData = verifyToken(token);

    const user = await UserMyInfo(tokenData.id);

    res.json({
      success: true,
      data: {
        id: user.id,
        accountId: user.accountId,
        name: user.name,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default myInfo;
