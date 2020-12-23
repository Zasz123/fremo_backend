import jwt from "jsonwebtoken";
import config from "../config";
import logger from "../loaders/logger";

type ITokenPayload = {
  id: number;
};

export const generateJWT = (payload: ITokenPayload) => {
  try {
    const token: string = jwt.sign(
      {
        id: payload.id,
      },
      config.jwtSecret,
      {
        expiresIn: "7d",
      }
    );

    return token;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export const verifyToken = (token: string) => {
  try {
    const verifedData = jwt.verify(token, config.jwtSecret);

    return verifedData as ITokenPayload;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};
