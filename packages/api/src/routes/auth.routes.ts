import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();
const authController = new AuthController();

router.get("/provider", authController.providerAuthStart.bind(authController));
router.get(
  "/provider/callback",
  authController.providerAuth.bind(authController),
);
export { router as authRoutes };
