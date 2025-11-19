import { z } from "zod";
import { loginService } from "./services/loginService.js";

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(5).max(100),
});

const login = async (req, res) => {
    const validation = loginSchema.safeParse(req.body);
    if (!validation.success) {
            return res.status(400).json({
            error: validation.error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path,
            })),
        });
    }
    
    const { email, password } = validation.data;

    console.log(`🚀 User ${email} attempted to log in.\n`)

    try {
        const data = await loginService(email, password);

        if (data instanceof Error) {
            return res.status(401).json({ error: data.message });
        }

        return res.status(200).json({ message: "Login successful!", data });
    } catch (error) {
        console.error("❌ Unexpected error:", error, "\n");
        return res.status(500).json({ error: error.message || String(error) });
    }
};

export const authController = {
    login
};