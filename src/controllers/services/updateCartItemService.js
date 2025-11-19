import prisma from "../../prismaClient.js";

export const updateCartItemService = async (userId, productId, quantity) => {
    try {
        // First, fetch the user's cart
        const cart = await prisma.carts.findFirst({
            where: { user_id: userId }
        });
        if (!cart) {
            return new Error("Cart not found.");
        }
        // Then, find the cart item to update
        const cartItem = await prisma.cart_products.findFirst({
            where: {
                cart_id: cart.id,
                product_id: productId
            }
        });
        if (!cartItem) {
            return new Error("Cart item not found.");
        }
        // Update the quantity of the cart item
        const updatedCartItem = await prisma.cart_products.update({
            where: { id: cartItem.id },
            data: { quantity: quantity }
        });
        
        return updatedCartItem;
    } catch (error) {
        console.error("❌ Error updating cart item:", error);
        return new Error("Failed to update cart item.");
    }
}