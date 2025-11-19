import z from "zod";

import { getAllCategoriesService } from "./services/getAllCategoriesService.js";
import { createCategoryService } from "./services/createCategoryService.js";
import { updateCategoryService } from "./services/updateCategoryService.js";
import { deleteCategoryService } from "./services/deleteCategoryService.js";

const categoryNameSchema = z.object({
    name: z.string().min(1, "Category name is required.")
});

const getAllCategories = async (req, res) => {
    console.log(`🚀 Fetching all categories\n`)
    
    try {
        const data = await getAllCategoriesService();

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }

        return res.status(200).json({ categories: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const createCategory = async (req, res) => {
    const validation = categoryNameSchema.safeParse(req.body);
    if (!validation.success) {
            return res.status(400).json({
            error: validation.error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path,
            })),
        });
    }

    const name = validation.data.name;

    console.log(`🚀 Creating category - Name: ${name}\n`);

    try {
        const data = await createCategoryService(name);
        if (data instanceof Error) {
            return res.status(400).json({ error: data.message });
        }

        return res.status(201).json({ message: "Category created successfully!", category: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const updateCategory = async (req, res) => {
    const categoryId = parseInt(req.params.categoryId);
    const validation = categoryNameSchema.safeParse(req.body);
    if (!validation.success) {
            return res.status(400).json({
            error: validation.error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path,
            })),
        });
    }

    const { name } = validation.data;

    console.log(`🚀 Updating category - ID: ${categoryId}, New Name: ${name}\n`);

    try {
        const data = await updateCategoryService(categoryId, name);
        if (data instanceof Error) {
            return res.status(400).json({ error: data.message });
        }

        return res.status(200).json({ message: "Category updated successfully!", category: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const deleteCategory = async (req, res) => {
    const categoryId = parseInt(req.params.categoryId);

    console.log(`🚀 Deleting category - ID: ${categoryId}\n`);

    try {
        const data = await deleteCategoryService(categoryId);
        if (data instanceof Error) {
            return res.status(400).json({ error: data.message });
        }

        return res.status(200).json({ message: "Category deleted successfully!" });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

export const categoryController = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};