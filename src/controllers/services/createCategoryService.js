import prisma from "../../prismaClient.js";

export const createCategoryService = async (categoryName) => {
    try {
        // Check if category already exists
        const existingCategory = await prisma.categories.findUnique({
            where: { name: categoryName }
        });
        if (existingCategory) {
            return new Error("Category already exists.");
        }

        // Create new category
        const newCategory = await prisma.categories.create({
            data: {
                name: categoryName
            }
        });

        return { id: newCategory.id, name: newCategory.name };
    } catch (error) {
        console.error("❌ Error creating category:", error);
        return new Error("Failed to create category.");
    }
}