const data = require('./data');
const prototypeQuestions = data.prototypeData;//will need to figure out what this is used for
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round)//will need to pull in round {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
