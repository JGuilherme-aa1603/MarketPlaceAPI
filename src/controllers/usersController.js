import { getProductsByUserIdService } from "./services/getProductsByUserIdService.js";

const getProductByUserId = async (req, res) => {
    const userId = parseInt(req.params.userId);

    console.log(`🚀 Fetching products for User ID: ${userId}\n`);

    try {
        const data = await getProductsByUserIdService(userId);

        if (data instanceof Error) {
            return res.status(404).json({ error: data.message });
        }
        
        return res.status(200).json({ products: data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
}

export const usersController = {
    getProductByUserId
};