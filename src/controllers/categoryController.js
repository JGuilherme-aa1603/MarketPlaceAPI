import { getAllCategoriesService } from "./services/getAllCategoriesService.js";

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

export const categoryController = {
    getAllCategories
};