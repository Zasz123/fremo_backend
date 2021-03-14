import User from "../../database/models/user.models";
import logger from "../../loaders/logger";

const UserCheckExists = async (googleUid: string) => {
  try {
    const user = await User.findOne({ where: { googleUid } });

    return !!user;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};

export default UserCheckExists;
