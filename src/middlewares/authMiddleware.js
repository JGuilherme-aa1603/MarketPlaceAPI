import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    console.log("🚀 Verifying JWT token for incoming request...\n");
    const authHeader = req.headers.authorization;
    if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1];
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
    }
};

export default authMiddleware;