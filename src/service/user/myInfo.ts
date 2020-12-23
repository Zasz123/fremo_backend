import User from "../../database/models/user.models";
import logger from "../../loaders/logger";

const UserMyInfo = async (id: number) => {
  try {
    const user = await User.findOne({ where: { id } });

    if (user === null) {
      throw new Error("user not exists");
    }

    return user;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default UserMyInfo;
