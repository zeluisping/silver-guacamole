import assert from "assert";
import "mocha";
import ValidateEthereumAddress from "./ValidateEthereumAddress";
import { describe } from "mocha";

describe("ValidateEthereumAddress", () => {
  it("should return undefined if address it not a string", () => {
    assert.equal(ValidateEthereumAddress(25), undefined);
  });
  it("should return undefined when the address is not 40 in length", () => {
    assert.equal(ValidateEthereumAddress("shorter than 40"), undefined);
  });
  it("should return undefined when the address containst non-hex characters", () => {
    assert.equal(
      ValidateEthereumAddress("fffffffffffffffffffffffffffffffffffffffz"),
      undefined
    );
  });
  it("should return the given address on success", () => {
    assert.equal(
      ValidateEthereumAddress("ffffffffffffffffffffffffffffffffffffffff"),
      "ffffffffffffffffffffffffffffffffffffffff"
    );
  });
});
