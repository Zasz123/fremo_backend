import { Router } from "express";

const router = Router();

import Register from "../middlewares/user/register";
import Login from "../middlewares/user/login";
import MyInfo from "../middlewares/user/myInfo";

router.post("/register", Register);
router.post("/login", Login);
router.post("/info", MyInfo);

export default router;
