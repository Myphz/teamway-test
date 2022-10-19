import { describe } from "node:test";
import { assert } from "chai";
import app from "../server/app";
import request from "supertest";

const req = request(app);

describe("Array", function () {
  describe("GET /questions", () => {
    it("should return the questions", async () => {
      const res = await req.get("/questions").expect(200);
    });
  });
});
