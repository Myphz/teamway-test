import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import { QUESTIONS } from "./questions";

export default async function connectDB() {
  global.mongod = await MongoMemoryServer.create();
  const client = new MongoClient(global.mongod.getUri());
  const collection = client.db("persona").collection("questions");
  await collection.insertMany(QUESTIONS);
  return collection;
}
