import prisma from "../../prismaClient.js";

export const addCartItemService = async (userId, productId, quantity) => {
    try {
        // First, fetch or create the user's cart
        let cart = await prisma.carts.findFirst({
            where: { user_id: userId }
        });
        
        if (!cart) {
            return new Error("Cart not found.");
        }

        // Check if the product is already in the cart
        let cartItem = await prisma.cart_products.findFirst({
            where: {
                cart_id: cart.id,
                product_id: productId
            }
        });
        if (cartItem) {
            // If it exists, update the quantity
            cartItem = await prisma.cart_products.update({
                where: { id: cartItem.id },
                data: { quantity: cartItem.quantity + quantity }
            });
        } else {
            // If not, add the new product to the cart
            cartItem = await prisma.cart_products.create({
                data: {
                    cart_id: cart.id,
                    product_id: productId,
                    quantity: quantity
                }
            });
        }

        return cartItem;
    } catch (error) {
        console.error("❌ Error adding item to cart:", error);
        return new Error("Failed to add item to cart.");
    }
}