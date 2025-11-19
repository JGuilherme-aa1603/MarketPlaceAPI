import prisma from "../../prismaClient.js";

export const getAllCategoriesService = async () => {
    try {
        const categories = await prisma.categories.findMany(
            {
                select: {
                    id: true,
                    name: true
                }
            }
        );
        return categories;
    } catch (error) {
        console.error("❌ Error fetching categories:", error);
        return new Error("Failed to fetch categories.");
    }
}
