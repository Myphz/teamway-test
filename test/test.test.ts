import { describe } from "node:test";
import assert from "assert";
import app from "../server/app";
import request from "supertest";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
