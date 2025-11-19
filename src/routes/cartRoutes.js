import express from "express";
import { cartController } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/", cartController.getCartItems);
cartRouter.post("/add", cartController.addItemToCart);
cartRouter.post("/checkout", cartController.checkout);
cartRouter.delete("/remove/:productId", cartController.removeItemFromCart);
cartRouter.put("/update/:productId/:quantity", cartController.updateCartItem);

export default cartRouter;