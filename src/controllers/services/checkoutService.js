import prisma from "../../prismaClient.js";

export const checkoutService = async (userId) => {
    try {
        // Fetch the user's cart
        const cart = await prisma.carts.findFirst({
            where: { user_id: userId }
        });
        if (!cart) {
            return new Error("Cart not found.");
        }
        // Fetch cart items
        const cartItems = await prisma.cart_products.findMany({
            where: { cart_id: cart.id }
        });
        if (cartItems.length === 0) {
            return new Error("Cart is empty.");
        }
        // Here you would typically process payment and create an order
        // For simplicity, we'll just clear the cart
        await prisma.cart_products.deleteMany({ 
            where: { cart_id: cart.id } 
        });
        return { message: "Checkout successful and cart cleared." };
    } catch (error) {
        console.error("❌ Error during checkout:", error);
        return new Error("Checkout failed.");
    }
}