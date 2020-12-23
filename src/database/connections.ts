import { Sequelize } from "sequelize-typescript";
import config from "../config";
import logger from "../loaders/logger";

const sequelize = new Sequelize({
  host: config.db.host,
  database: config.db.db_name,
  dialect: "mysql",
  port: Number(config.db.port),
  username: config.db.user,
  password: config.db.pass,
  define: {
    charset: "utf8",
  },
});

const connection = async (force: boolean) => {
  sequelize.addModels([__dirname + "/models/*.models.ts"]);
  const connect = await sequelize.sync({ force });

  if (!connect) {
    logger.error("DB Connect Error");
    return false;
  } else {
    logger.info("DB Connected");
    return true;
  }
};

export default connection;
