### Description

Include a summary of the change and which issue is fixed or feature was added

### Fixes (if any)
 - 
 -

### Features (if any)
 - 
 -

### Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

### Iteration 2 Requirements

**_Deck_**
- [ ] Deck class initialized with an array of Card objects and an accompanying test file
- [ ] Should know how many Cards are in the Deck

**_Round_**
Your Round class should meet the following requirements -
- [ ] returnCurrentCard: method that returns the current card being played
- [ ] takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  - [ ] When a guess is made, a new Turn instance is created.
  - [ ] The turns count is updated, regardless of whether the guess is correct or incorrect
  - [ ] The next card becomes current card
  - [ ] Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  - [ ] Feedback is returned regarding whether the guess is incorrect or correct
- [ ] calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
- [ ] endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

### Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings/bugs
- [ ] I have checked variable and parameter names: are they descriptive and unique?
- [ ] Is the code *dry*, SRP?
- [ ] Is it easy for others to read?
- [ ] Is the syntax consistent? (e.g. use of semicolons, blank lines)
- [ ] Are commit messages formatted correctly?

### Next Steps:
 - 
 -
