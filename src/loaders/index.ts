import { Application } from "express";
import { Server } from "http";

import logger from "./logger";
import expressLoader from "./express";
import socketLoader from "./socket";

export default async ({
  expressApp,
  httpServer,
}: {
  expressApp: Application;
  httpServer: Server;
}) => {
  //express load
  await expressLoader(expressApp);
  logger.info("express loaded");

  //socket load
  await socketLoader(httpServer);
  logger.info("socket loaded");
};
