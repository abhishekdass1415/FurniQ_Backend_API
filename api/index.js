import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import resdRoutes from "./routes/resdRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import customerRoutes from "./routes/customerRoute.js";
import inventoryRoutes from "./routes/inventoryRoute.js";

import productRoutes from "./routes/productRoute.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to FurniQ API server!");
 });
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resources", resdRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/inventories", inventoryRoutes);
app.use("/api/products", productRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${5000}`);
});