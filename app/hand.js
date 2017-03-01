class Hand{
  constructor(){
    throw "Not Implemented";
  }

  /**
    adds a card to the bottom of the hand.
  */
  receiveCard(card){
    throw "Not Implemented";
  }

  /**
    returns the top card from the hand and removes it from the hand.
    returns null if there are no cards in the hand.
  */
  playCard(){
    throw "Not Implemented";
  }
}

export default Hand;