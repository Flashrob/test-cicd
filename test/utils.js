const { expect } = require("chai");
const { add } = require("../utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Adds 2 of the same number", () => {
      const result = add(1, 1);
      expect(result).to.equal(4);
    });

    it("Adds 2 different numbers", () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    it("Adds a positive and a negative number", () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it("Adds 2 negative numbers", () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });
});

// CREATE BRANCH AND CHECK OUT TO IT
// git branch <name> + git checkout <name>
// git checkout -b <name>

// MAKE A CHANGE, ADD IT, COMMIT IT, PUSH IT
// git add .
// git commit -m "commit message"
// git push

// SET THE ORIGIN
// set the origin, copy paste from CLI

// CREATE THE PR
// click on link to create PR

// CREATE PULL REQUEST, DONT FORGET TO POINT TO YOUR OWN REPO
// point PR to your own test-cicd repo
