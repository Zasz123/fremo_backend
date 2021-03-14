import { Router } from "express";

const router = Router();

import Register from "../middlewares/user/register";
import Login from "../middlewares/user/login";
import MyInfo from "../middlewares/user/myInfo";
import CheckExists from "../middlewares/user/checkExistsUser";

router.get("/info", MyInfo);
router.get("/check", CheckExists);

router.post("/register", Register);
router.post("/login", Login);

export default router;
