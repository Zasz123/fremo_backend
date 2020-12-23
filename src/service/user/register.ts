import { IUserRegister } from "../../interfaces/User";
import User from "../../database/models/user.models";
import logger from "../../loaders/logger";
import * as bcrypt from "bcrypt";

const UserRegister = async (user: IUserRegister) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = await User.create({
      ...user,
      password: hashedPassword,
    });

    if (!createdUser) {
      throw new Error("Register Error");
    }

    return {
      createdUser,
    };
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default UserRegister;
