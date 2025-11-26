import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import authMiddleware from "./middlewares/authMiddleware.js";

import productsRouter from "./routes/productsRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
/*app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));*/

app.use(helmet());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cart", authMiddleware, cartRouter);
app.use("/api/categories", categoryRouter);

app.use("/api/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

export default app;
