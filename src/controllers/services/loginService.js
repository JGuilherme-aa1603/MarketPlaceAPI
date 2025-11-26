import prisma from "../../prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginService = async (email, password) => {
    try {
        const user = await prisma.users.findUnique({
            where: { email }
        });
        if (!user) {
            return new Error("User not found.");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return new Error("Invalid password.");
        }
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
        );
        return { token, user: { id: user.id, username: user.username, email: user.email } };
    } catch (error) {
        console.error("❌ Error during login:", error);
        return new Error("Login failed due to server error.");
    }
}
