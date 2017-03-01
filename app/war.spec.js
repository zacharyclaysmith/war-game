import * as mocha from 'mocha';

mocha.describe("Card", () => {
  mocha.describe("play()", () => {
    mocha.it("should throw an error if numberOfRanks is not a positive number", () => {
      throw "Not Implemented"
    });

    mocha.it("should throw an error if numberOfSuits is not a positive number", () => {
      throw "Not Implemented"
    });

    mocha.it("should throw an error if numberOfPlayers is not a positive number", () => {
      throw "Not Implemented"
    });

    mocha.it("should call setup()", () => {
      throw "Not Implemented"
    });

    mocha.it("should call playRound() after setup() until a single hand has all of the cards", () => {
      throw "Not Implemented"
    });

    mocha.it("should call playRound() after setup() until 1000 rounds have been played if no one has won.", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("setup()", () => {
    mocha.it("should create a deck", () => {
      throw "Not Implemented"
    });

    mocha.it("should shuffle the deck", () => {
      throw "Not Implemented"
    });

    mocha.it("should create hands for numberOfPlayers", () => {
      throw "Not Implemented"
    });

    mocha.it("should deal cards out to each hand until the deck is empty", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("playRound()", () => {
    mocha.it("should play card from each hand each round", () => {
      throw "Not Implemented"
    });

    mocha.it("should award the played cards to the hand that provided the highest ranked card if there are no ties for highest card", () => {
      throw "Not Implemented"
    });

    mocha.it("should call playWar() if there is a tie for the highest ranked card", () => {
      throw "Not Implemented"
    });

    mocha.it("should award all played cards to the hand returned from playWar()", () => {
      throw "Not Implemented"
    });
  });

  mocha.describe("playWar()", () => {
    mocha.it("should take two cards from each participant in a war, and compare the second card (if it exists), the hand with the highest card gets all of the played cards", () => {
      throw "Not Implemented"
    });

    mocha.it("should use the first card for comparison if it is the hand's last card", () => {
      throw "Not Implemented"
    });

    mocha.it("should repeat the war only between the tied players if there is a tie for highest card.", () => {
      throw "Not Implemented"
    });

    mocha.it("should return the hand that won the war.", () => {
      throw "Not Implemented"
    });
  });
});