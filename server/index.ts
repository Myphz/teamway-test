import express from "express";
import connectDB from "./database.js";

const collection = await connectDB();
const app = express();

app.use(express.json());

app.get("/questions", async (req, res) => {
  res.json(await collection.find().toArray());
});

app.listen(3000);
