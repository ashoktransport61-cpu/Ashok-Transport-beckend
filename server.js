import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/form", formRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://ashoktransport61_db_user:CvYRMNSeLpxQlKgL@ashokchuhandb.abopacb.mongodb.net/ashoktransport61";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("❌ DB connection error:", err));
