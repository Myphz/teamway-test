import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";
import { QUOTES, QUESTIONS } from "./constants.js";
import connectDB from "./database.js";

const collection = await connectDB();
const app = express();

const distPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "dist"
);

app.use(express.json());

app.get("/questions", async (req, res) => {
  res.json(await collection.find().toArray());
});

app.post("/results", (req, res) => {
  const { score }: { score: number } = req.body;
  if (isNaN(score)) return res.status(400).json({ message: "Invalid score" });
  // Total possible score (100% extrovert)
  const totalScore = QUESTIONS.length * (QUESTIONS[0].answers.length - 1);
  // Extrovert if score >= 50%
  const result =
    score >= Math.floor(totalScore / 2) ? "EXTROVERT" : "INTROVERT";

  res.json({ result, quotes: QUOTES[result] });
});

const staticMiddleware = express.static(distPath);
// Support history api
app.use(staticMiddleware);
app.use(history({ index: "/index.html" }));
// 2nd call for redirected requests
app.use(staticMiddleware);

export default app;
