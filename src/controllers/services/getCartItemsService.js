import prisma from "../../prismaClient.js";

export const getCartItemsService = async (userId) => {
    try {
        // First, fetch the user's cart
        const cart = await prisma.carts.findFirst({
            where: {
                user_id: userId
            }
        });

        if (!cart) {
            return []; // Cart empty or does not exist
        }

        // Depois, buscar os produtos do carrinho
        const cartItems = await prisma.cart_products.findMany({
            where: {
                cart_id: cart.id
            },
            select: {
                id: true,
                quantity: true,
                products: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        price: true,
                        image: true,
                        categories: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                        users: {
                            select: {
                                id: true,
                                username: true
                            }
                        },
                        ratings: {
                            select: {
                                rate: true
                            }
                        }
                    }
                }
            }
        });

        // Calculate average rating for each product in cart items
        const formattedCartItems = cartItems.map(item => {
            const product = item.products;
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
                id: item.id,
                quantity: item.quantity,
                product: {
                    ...productWithoutRatings,
                    rating: {
                        rate: parseFloat(averageRating.toFixed(2)),
                        count: ratingCount
                    }
                }
            };
        });

        return formattedCartItems;
    } catch (error) {
        console.error("❌ Error fetching cart items:", error);
        return new Error("Failed to fetch cart items.");
    }
}