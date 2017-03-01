import * as mocha from 'mocha';

mocha.describe("Card", () => {
  mocha.describe("constructor()", () => {
    mocha.it("should throw an error if the orderRandomizer parameter is falsy", () => {
      throw "Not Implemented"
    });

    mocha.it("should set the orderRandomizer property to the orderRandomizer parameter", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("create()", () => {
    mocha.it("should throw an error if numberOfRanks is not a positive number", () => {
      throw "Not Implemented"
    });

    mocha.it("should throw an error if numberOfSuits is not a positive number", () => {
      throw "Not Implemented"
    });

    mocha.it("should set the cards array to contain cards of the corresponding numberOfSuits and numberOfRanks", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("shuffle()", () => {
    mocha.it("should return the array of cards as returned from the arrayRandomizer", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("deal()", () => {
    mocha.it("should return the top card from the deck, and that card should be removed from the deck.", () => {
      throw "Not Implemented"
    });
  });
});