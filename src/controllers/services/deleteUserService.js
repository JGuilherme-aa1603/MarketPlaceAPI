import prisma from "../../prismaClient.js";

export const deleteUserService = async (userId) => {
    try {
        // Check if user exists
        const user = await prisma.users.findUnique({
            where: { id: userId }
        });
        if (!user) {
            return new Error("User not found.");
        }

        // Delete user's cart and cart items
        const cart = await prisma.carts.findFirst({
            where: { user_id: userId }
        });
        if (cart) {
            await prisma.cart_products.deleteMany({
                where: { cart_id: cart.id }
            });
            await prisma.carts.delete({
                where: { id: cart.id }
            });
        }

        // Delete user
        await prisma.users.delete({
            where: { id: userId }
        });

        return { message: "User deleted successfully." };
    } catch (error) {
        console.error("❌ Error deleting user:", error);
        return new Error("Failed to delete user.");
    }
}
