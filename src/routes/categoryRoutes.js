import express from "express";
import { categoryController } from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";
import { ca } from "zod/locales";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.post("/", authMiddleware, isAdmin, categoryController.createCategory);
categoryRouter.put("/:categoryId", authMiddleware, isAdmin, categoryController.updateCategory);
categoryRouter.delete("/:categoryId", authMiddleware, isAdmin, categoryController.deleteCategory);

export default categoryRouter;