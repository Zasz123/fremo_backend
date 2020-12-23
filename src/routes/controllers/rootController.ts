import { Router } from "express";

const router = Router();

import UserController from "./user.controller";

router.use("/user", UserController);

export default router;
