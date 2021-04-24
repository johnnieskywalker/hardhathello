import chai from "chai";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Witaj Świecie!");
    expect(await greeter.greet()).to.equal("Witaj Świecie!");
  });
});
