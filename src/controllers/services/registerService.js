import prisma from "../../prismaClient.js";
import bcrypt from "bcrypt";

export const registerService = async (username, email, password) => {
    try {
        // Check if email or username already exists
        const existingEmail = await prisma.users.findFirst({
            where: { email }
        });
        if (existingEmail) {
            return new Error("Email already in use.");
        }
        
        // Check for existing username
        const existingUsername = await prisma.users.findUnique({
            where: { username }
        });
        if (existingUsername) {
            return new Error("Username already in use.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        // Create a cart for the new user
        await prisma.carts.create({
            data: {
                user_id: newUser.id
            }
        });

        return { id: newUser.id, username: newUser.username, email: newUser.email };
    } catch (error) {
        console.error("❌ Error during registration:", error);
        return new Error("Registration failed due to server error.");
    }
}