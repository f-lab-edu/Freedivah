import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { errorMiddleware } from "./middlewares/error.middleware";
import { authRoutes } from "./routes/auth.routes";

const env = process.env.NODE_ENV || "development";
const envPath = path.resolve(__dirname, `../../../../.env.${env}`);

dotenv.config({ path: envPath });

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_WEB_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
