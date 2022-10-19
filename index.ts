import express from "express";
import connectDB from "./database";

const collection = await connectDB();
const app = express();

app.use(express.json());

app.get("/questions", async (req, res, next) => {});
