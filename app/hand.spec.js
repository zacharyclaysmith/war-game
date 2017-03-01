import * as mocha from 'mocha';

mocha.describe("Hand", () => {
  mocha.describe("constructor()", () => {
  });

  mocha.describe("receiveCard()", () => {
    mocha.it("should add the card to the bottom of the hand", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("playCard()", () => {
    mocha.it("should return the top card from the hand, and that card should be removed from the hand.", () => {
      throw "Not Implemented"
    });

    mocha.it("should return null if there are no cards in the hand.", () => {
      throw "Not Implemented"
    });
  });
});