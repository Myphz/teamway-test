import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import { QUESTIONS } from "./questions.js";

export default async function connectDB() {
  const mongod = await MongoMemoryServer.create();
  const client = new MongoClient(mongod.getUri());
  const collection = client.db("persona").collection("questions");
  await collection.insertMany(QUESTIONS);
  return collection;
}
