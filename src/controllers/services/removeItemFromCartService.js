import prisma from "../../prismaClient.js";

export const removeItemFromCartService = async (userId, productId) => {
    try {
        // First, fetch the user's cart
        const cart = await prisma.carts.findFirst({
            where: {
                user_id: userId
            }
        });

        if (!cart) {
            return new Error("Cart not found.");
        }

        // Then, remove the product from the cart
        const deletedCartItem = await prisma.cart_products.deleteMany({
            where: {
                cart_id: cart.id,
                product_id: productId
            }
        });
        
        if (deletedCartItem.count === 0) {
            return new Error("Product not found in cart.");
        }

        return deletedCartItem;
    } catch (error) {
        console.error("❌ Error removing item from cart:", error);
        return new Error("Failed to remove item from cart.");
    }
}