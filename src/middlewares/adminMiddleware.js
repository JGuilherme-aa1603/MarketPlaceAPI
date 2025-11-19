import prisma from "../prismaClient.js";

export const isAdmin = (req, res, next) => {
    const userId = req.user.id;
    const userEmail = req.user.email;
    
    console.log(`🚀 Checking if user ${userEmail} has admin privileges...\n`);

    try {

        prisma.admins.findFirst({
            where: { user_id: userId }
        }).then(admin => {
            if (!admin) {
                console.log("❌ User is not an admin.\n");
                return res.status(403).json({ error: "Access denied. Admins only." });
            }
            console.log("✅ User is an admin. Access granted.\n");
            next();
        }).catch(err => {
            console.error("❌ Error checking admin status:", err, "\n");
            return res.status(500).json({ error: "Internal server error." });
        });
    } catch (error) {
        console.error("❌ Unexpected error in admin middleware:", error, "\n");
        return res.status(500).json({ error: "Internal server error." });
    }
};

