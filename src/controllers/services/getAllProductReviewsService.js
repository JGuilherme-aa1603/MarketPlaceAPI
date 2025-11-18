import prisma from "../../prismaClient.js";

export const getAllProductReviewsService = async (productId) => {
    try {
        const reviews = await prisma.ratings.findMany({
            where: {
                product_id: productId
            },
            select: {
                id: true,
                rate: true,
                comment: true,
                created_at: true,
                users: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            }
        });
        return reviews;
    } catch (error) {
        console.error("❌ Error fetching product reviews:", error);
        return new Error("Failed to fetch product reviews.");
    }
}