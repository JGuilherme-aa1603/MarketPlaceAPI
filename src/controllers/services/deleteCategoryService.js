import prisma from "../../prismaClient.js";

export const deleteCategoryService = async (categoryId) => {
    try {
        // Check if category exists
        const existingCategory = await prisma.categories.findUnique({
            where: { id: categoryId }
        });
        if (!existingCategory) {
            return new Error("Category not found.");
        }

        // Delete category
        await prisma.categories.delete({
            where: { id: categoryId }
        });

        return { message: "Category deleted successfully." };
    } catch (error) {
        console.error("❌ Error deleting category:", error);
        return new Error("Failed to delete category.");
    }
}