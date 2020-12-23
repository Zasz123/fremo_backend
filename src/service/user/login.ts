import { IUserLogin } from "../../interfaces/User";
import User from "../../database/models/user.models";
import logger from "../../loaders/logger";
import * as bcrypt from "bcrypt";
import { generateJWT } from "../../utils/jwt";

const UserLogin = async (user: IUserLogin) => {
  try {
    const registerdUser: User | null = await User.findOne({
      where: { accountId: user.accountId },
    });

    if (registerdUser === null) {
      throw new Error("user not registered");
    }

    const isMatchPassword: boolean = await bcrypt.compare(
      registerdUser.password,
      user.password
    );

    if (isMatchPassword) {
      throw new Error("password is not match");
    }

    const token = generateJWT({ id: registerdUser.id });

    return token;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default UserLogin;
