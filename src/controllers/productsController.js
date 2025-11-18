import { getAllProductsService } from "./services/getAllProductsService.js";
import { getAllProductReviewsService} from "./services/getAllProductReviewsService.js";
import { getProductByIdService } from "./services/getProductByIdService.js";

const getAllProducts = async (req, res) => {
    const categoryName = req.query.category;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const initialValue = parseInt(req.query.initialValue) || null;
    const finalValue = parseInt(req.query.finalValue) || null;

    console.log(`🚀 Fetching products - Category: ${categoryName || "All"}, Page: ${page}, Limit: ${limit}, Offset: ${offset}\n`);

    try {
        const data = await getAllProductsService(categoryName, limit, offset, initialValue, finalValue);

        return res.status(200).json({ products: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const getProductById = async (req, res) => {
    const productId = parseInt(req.params.productId);

    console.log(`🚀 Fetching product with ID: ${productId}\n`);

    try {
        const data = await getProductByIdService(productId);

        return res.status(200).json({ product: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

const getAllProductsReview = async (req, res) => {
    const productId = parseInt(req.params.productId);

    console.log(`🚀 Fetching reviews for Product ID: ${productId}\n`);

    try {
        const data = await getAllProductReviewsService(productId);

        return res.status(200).json({ reviews: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

export const productsController = {
    getAllProducts,
    getAllProductsReview,
    getProductById
};
