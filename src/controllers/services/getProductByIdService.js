import prisma from "../../prismaClient.js";

export const getProductByIdService = async (productId) => {
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: productId
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                image: true,
                users: {
                    select: {
                        id: true,
                        username: true
                    }
                },
                categories: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                ratings: {
                    select: {
                        rate: true
                    }
                }
            }
        });

        if (!product) {
            return new Error("Product not found.");
        }

        // Calculate average rating
        const ratings = product.ratings;
        
        let averageRating = 0;
        let ratingCount = 0;

        if (ratings && ratings.length > 0) {
            const totalRate = ratings.reduce((sum, rating) => sum + rating.rate, 0);
            averageRating = totalRate / ratings.length;
            ratingCount = ratings.length;
        }

        // Remove individual ratings from product object
        const { ratings: _, ...productWithoutRatings } = product;
        
        const productWithAvgRating = {
            ...productWithoutRatings,
            rating: {
                rate: parseFloat(averageRating.toFixed(2)),
                count: ratingCount
            }
        };

        return productWithAvgRating;
    } catch (error) {
        console.error("❌ Error fetching product by ID:", error);
        return new Error("Failed to fetch product.");
    }
}