import express from "express";
import morgan from "morgan";
import customErrorMiddleWare from "../routes/middlewares/error/errorMiddleWare";

import rootController from "../routes/controllers/rootController";

export default (app: express.Application) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(rootController);

  // custom error middleware
  app.use(customErrorMiddleWare);
};
