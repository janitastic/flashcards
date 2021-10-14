const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;
  beforeEach('set up', function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal([
      {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'},
      {id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'},
      {id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'}
    ]);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
  });

  it('should be able to take a turn by guessing', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should move on to the next card after a guess is made', function() {
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.deep.equal({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
  });

  it('should return \'correct!\' for a correct guess', function() {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should return \'incorrect!\' for an incorrect guess', function() {
    expect(round.takeTurn('array')).to.equal('incorrect!');
  });

  it('should store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should be able to calculate the percentage of questions answered correctly', function() {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should print a feedback message at the end of the round', function () {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('mutator method');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});
