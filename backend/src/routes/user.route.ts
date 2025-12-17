import { Router } from "express";
import { healthCheckHandler } from "../controllers/user/user.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, healthCheckHandler);

export default router;
