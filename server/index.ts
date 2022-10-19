import express from "express";
import connectDB from "./database.js";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";

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

const staticMiddleware = express.static(distPath);
// Support history api
app.use(staticMiddleware);
app.use(history({ index: "/index.html" }));
// 2nd call for redirected requests
app.use(staticMiddleware);

app.listen(3000);
