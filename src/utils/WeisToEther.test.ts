import assert from "assert";
import "mocha";
import { describe } from "mocha";
import WeisToEther from "./WeisToEther";
import Decimal from "decimal.js";

describe("WeisToEther", () => {
  it("should return the correct value in Ether", () => {
    assert(
      WeisToEther(new Decimal(19254563000000000)).equals(
        new Decimal(0.019254563)
      )
    );
  });
});
