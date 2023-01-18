const assert = require('chai').assert
const truffleAssert = require('truffle-assertions');

const MySmartContract = artifacts.require("MySmartContract");

contract("MySmartContract", async accounts => {
  let mySmartContract;

  before(async () => {
    mySmartContract = await MySmartContract.deployed();
  });

  it("should set the value correctly", async () => {
    await mySmartContract.setValue(5);
    const value = await mySmartContract.getValue();
    assert.equal(value, 5, "The value was not set correctly");
  });

  it("should emit an event when the value is set", async () => {
    await truffleAssert.passes(mySmartContract.setValue(10));
  });
});;