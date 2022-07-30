# Word-Guessing Game

**Tier:** 2-Intermediate

A small word-guessing game also known as "Hangman". One player sets a word the other one has to guess.
Every letter is one point, and after a set number of rounds, the points will be counted together,
and the winner will be shown.

The most difficult thing is the array handling because the entered word needs to be loaded in an array to replace
duplicate characters: if the word is "Hello" and the player enters "L" both ls need to be replaced -> "_ _ L L _".

Features:
-   [ ] User can set the number of rounds.
-   [ ] Output array with underscores.
-   [ ] Solution array with the solution.
-   [ ] Duplicate characters need to be replaced.

## User Stories

-   [ ] Player 1 can see an `input` text field to enter the word to be guessed.
-   [ ] Player 2 can see a `Label` with underscores for each character in the solution.
-   [ ] Player 2 can enter one character, and if this character is in the solution, it will be replaced automatically.
-   [ ] Player switch (player 2 sets the question and player 1 tries to guess it).

## Bonus features

-   [ ] Player 2 can enter a String except for one single character.

## Example projects

If you want to see how a project like this could look, check [this project out](https://www.github.com/GregorGott/Word-Guesser).
It's a JavaFX word-guessing game.
