import express from "express";
import { productsController } from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:productId", productsController.getProductById);
productsRouter.get("/:productId/reviews", productsController.getAllProductsReview);

export default productsRouter;