import z from "zod";
import { getCartItemsService } from "./services/getCartItemsService.js";
import { addCartItemService } from "./services/addCartItemService.js";
import { removeItemFromCartService } from "./services/removeItemFromCartService.js";
import { updateCartItemService } from "./services/updateCartItemService.js";
import { checkoutService } from "./services/checkoutService.js";

const cartItemSchema = z.object({
    productId: z.number().int().positive(),
    quantity: z.number().int().positive(),
});

const getCartItems = async (req, res) => {
    const userId = req.user.id;

    console.log(`🚀 Fetching cart items for User ID: ${userId}\n`);
    
    try {
        const data = await getCartItemsService(userId);

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }

        return res.status(200).json({ cartItems: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const addItemToCart = async (req, res) => {
    const userId = req.user.id;
    const validation = cartItemSchema.safeParse(req.body);
    if (!validation.success) {
            return res.status(400).json({
            error: validation.error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path,
            })),
        });
    }
    const { productId, quantity } = validation.data;

    console.log(`🚀 Adding item to cart for User ID: ${userId} - Product ID: ${productId}, Quantity: ${quantity}\n`);
    
    try {
        const data = await addCartItemService(userId, productId, quantity);

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }

        return res.status(200).json({ message: "Item added to cart successfully!", cartItem: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const checkout = async (req, res) => {
    const userId = req.user.id;

    console.log(`🚀 Processing checkout for User ID: ${userId}\n`)
    
    try {
        const data = await checkoutService(userId);

        if (data instanceof Error) {
            return res.status(400).json({ error: data.message });
        }
        
        return res.status(200).json({ message: "Checkout successful!", order: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
};

const removeItemFromCart = async (req, res) => {
    const userId = req.user.id;
    const productId = parseInt(req.params.productId);

    console.log(`🚀 Removing item from cart for User ID: ${userId} - Product ID: ${productId}\n`);
    
    try {
        const data = await removeItemFromCartService(userId, productId);

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }

        return res.status(200).json({ message: "Item removed from cart successfully!" });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const updateCartItem = async (req, res) => {
    const userId = req.user.id;
    const { productId, quantity } = req.params;

    if (!productId || !quantity) {
        return res.status(400).json({ error: "Product ID and quantity are required." });
    }

    console.log(`🚀 Updating cart item for User ID: ${userId} - Product ID: ${productId}, New Quantity: ${quantity}\n`)
    
    try {
        const data = await updateCartItemService(userId, parseInt(productId), parseInt(quantity));

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }

        return res.status(200).json({ message: "Cart item updated successfully!", cartItem: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }

};


export const cartController = {
    getCartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItem,
    checkout
};