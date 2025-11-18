import prisma from "../../prismaClient.js";

export const getProductsByUserIdService = async (userId) => {
    try {
        const products = await prisma.products.findMany({
            where: {
                seller_id: userId
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

        // Calculate average rating for each product
        const productsWithAvgRating = products.map(product => {
            const ratings = product.ratings;
            
            let averageRating = 0;
            let ratingCount = 0;

            if (ratings && ratings.length > 0) {
                const totalRate = ratings.reduce((sum, rating) => sum + rating.rate, 0);
                averageRating = totalRate / ratings.length;
                ratingCount = ratings.length;
            }

            // Remove individual ratings from the product object
            const { ratings: _, ...productWithoutRatings } = product;
            
            return {
                ...productWithoutRatings,
                rating: {
                    rate: parseFloat(averageRating.toFixed(2)),
                    count: ratingCount
                }
            };
        });

        return productsWithAvgRating;
    } catch (error) {
        console.error("❌ Error fetching products by user ID:", error);
        return new Error("Failed to fetch products for the specified user.");
    }
}