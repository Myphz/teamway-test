import { describe } from "node:test";
import { assert } from "chai";
import app from "../server/app";
import request from "supertest";
import { QUESTIONS, QUOTES } from "../server/constants";
const req = request(app);

describe("Server", function () {
  describe("GET /questions", () => {
    it("should return the questions", async () => {
      const res = await req.get("/questions").expect(200);
      // Remove _id key
      for (let i = 0; i < res.body.length; i++) {
        delete res.body[i]._id;
        delete (QUESTIONS[i] as any)._id;
      }

      assert.deepEqual(res.body, QUESTIONS);
    });
  });

  describe("POST /results", () => {
    it("should return INTROVERT", async () => {
      const score = 7;

      const res = await req.post("/results").send({ score }).expect(200);
      const { result, quotes } = res.body;

      assert.strictEqual(result, "INTROVERT");
      assert.deepEqual(quotes, QUOTES["INTROVERT"]);
    });

    it("should return EXTROVERT", async () => {
      const score = 8;

      const res = await req.post("/results").send({ score }).expect(200);
      const { result, quotes } = res.body;

      assert.strictEqual(result, "EXTROVERT");
      assert.deepEqual(quotes, QUOTES["EXTROVERT"]);
    });

    it("should return 400 Bad Request", async () => {
      const score = "not a number";
      await req.post("/results").send({ score }).expect(400);
    });
  });
});
