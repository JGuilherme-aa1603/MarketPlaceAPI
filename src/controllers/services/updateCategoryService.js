import prisma from "../../prismaClient.js";

export const updateCategoryService = async (categoryId, categoryName) => {
    try {
        // Check if category exists
        const existingCategory = await prisma.categories.findUnique({
            where: { id: categoryId }
        });
        if (!existingCategory) {
            return new Error("Category not found.");
        }

        // Update category
        const updatedCategory = await prisma.categories.update({
            where: { id: categoryId },
            data: {
                name: categoryName
            }
        });

        return { id: updatedCategory.id, name: updatedCategory.name };
    } catch (error) {
        console.error("❌ Error updating category:", error);
        return new Error("Failed to update category.");
    }
}