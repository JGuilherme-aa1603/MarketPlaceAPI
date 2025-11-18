import { parse } from "dotenv";
import { supabase } from "../supabaseConfig.js";
import { getAllProductsService } from "./services/getAllProductsService.js";

const getAllProducts = async (req, res) => {
    const categoryName = req.query.category;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const initialValue = parseInt(req.query.initialValue) || null;
    const finalValue = parseInt(req.query.finalValue) || null;

    console.log(`🚀 Fetching products - Category: ${categoryName || "All"}, Page: ${page}, Limit: ${limit}, Offset: ${offset}\n`);

    try {
        const data = await getAllProductsService(supabase, categoryName, limit, offset, initialValue, finalValue);
        
        if (data instanceof Error) {
            console.error("❌", data.message, "\n");
            return res.status(502).json({ error: data.message });
        }

        return res.status(200).json({ products: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}


export const productsController = {
    getAllProducts
};