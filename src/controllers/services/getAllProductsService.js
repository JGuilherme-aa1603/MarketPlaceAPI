import prisma from "../../prismaClient.js";

export const getAllProductsService = async (categoryName, limit = 10, offset, initialValue, finalValue) => {
    try {
        // Make filters dynamically
        const where = {};

        // Fillter by category
        if (categoryName) {
            where.categories = {
                name: categoryName
            };
        }

        // Filter by price range
        if (initialValue !== undefined && initialValue !== null && finalValue !== undefined && finalValue !== null) {
            where.price = {
                gte: initialValue,
                lte: finalValue
            };
        } else if (initialValue !== undefined && initialValue !== null) {
            where.price = {
                gte: initialValue
            };
        } else if (finalValue !== undefined && finalValue !== null) {
            where.price = {
                lte: finalValue
            };
        }

        // Search products 
        const data = await prisma.products.findMany({
            where,
            include: {
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
            },
            skip: offset,
            take: limit
        });

        // Calculate average rating for each product
        const productsWithAvgRating = data.map(product => {
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
        return new Error(`Error fetching products: ${error.message}`);
    }
}
