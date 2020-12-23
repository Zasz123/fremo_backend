import { createLogger, format, transports, config } from "winston";
import rootPath from "app-root-path";

// --- levels ---
// error
// warn
// info
// http
// verbose
// debug
// silly

const logger = createLogger({
  levels: config.npm.levels,
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info) => `${info.timestamp} [${info.level}] : ${info.message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: "error",
      filename: `${rootPath}/logs/error.log`,
    }),
  ],
});

export default logger;
