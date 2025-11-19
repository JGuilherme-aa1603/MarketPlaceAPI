import express from "express";
import { authController } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.delete("/delete", authMiddleware, authController.deleteUser);

export default authRouter;