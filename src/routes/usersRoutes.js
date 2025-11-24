import express from "express";
import { usersController } from "../controllers/usersController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const usersRouter = express.Router();

usersRouter.get("/:userId/products", usersController.getProductByUserId);
usersRouter.get("/profile", authMiddleware, usersController.getUserProfile);

export default usersRouter;