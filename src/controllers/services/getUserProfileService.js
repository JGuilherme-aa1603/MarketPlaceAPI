import prisma from "../../prismaClient.js";

export const getUserProfileService = async (userId) => {
    try {
        const userProfile = await prisma.users.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                username: true,
                email: true
            }
        });
        if (!userProfile) {
            return new Error("User not found.");
        }
        return userProfile;
    } catch (error) {
        console.error("❌ Error fetching user profile:", error);
        return new Error("Failed to fetch user profile.");
    }
}