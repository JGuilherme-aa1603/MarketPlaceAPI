import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRoutes.js";

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

export default app;
