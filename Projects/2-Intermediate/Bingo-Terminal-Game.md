# Bingo Terminal Game

**Tier:** 2-Intermediate

Create a Bingo terminal game.

Bingo is a game where players try to match randomly selected numbers to the numbers on their card. The first player to match all their numbers wins. Someone calls out the numbers and the players cross them off their cards. The game is played with a set of random numbers and a set of cards with those numbers. The cards are usually printed on paper, but they can be displayed on a computer screen.

There are many variations of Bingo, but the most common is the 5x5 grid with 24 numbers and one free space. The numbers range from 1 to 75. These numbers are distributed following the next table:

| Letter| Range    |
| ----- | -------- |
| B     | 1 al 15  |
| I     | 16 al 30 |
| N     | 31 al 45 |
| G     | 46 al 60 |
| O     | 61 al 75 |

A person can win the game by matching the numbers as follows:

- A line (horizontal, vertical, or diagonal)
- The full card
- 4 corners
- Diagonal (top-left to bottom-right and vice versa)

> Note: The free space is the center of the card and can be used to complete any of the above combinations.

## Constraints

- The game must be played in the terminal

## User Stories

- [ ] User can start a new game by running the program.
- [ ] User can specify the number of players.
- [ ] User can see the card of each player.
- [ ] User can see the winner of the game.
- [ ] User can see the score of each player.
- [ ] User can see a menu each turn with the following options:
  - [ ] Mark a number (if the number is in the card, it will be marked)
  - [ ] See the score of each player
- Marked numbers will be randomly generated.

## Bonus Features

- [ ] User can see a different name for each player. For instance, the first player can be called "Player 1", the second "Player 2", etc.
- [ ] User can see marked numbers with different colors.
- [ ] User can see all the cards of the players in the same screen (one card next to the other).

## Useful links and resources

- [Print Colors in Python terminal](https://www.geeksforgeeks.org/print-colors-python-terminal/)
- [How to play Bingo](https://www.youtube.com/watch?v=nGCEpUAnkSg)
- [Object Oriented Programming in Python](https://realpython.com/python3-object-oriented-programming/)
- [Magic methods in Python](https://www.tutorialsteacher.com/python/magic-methods-in-python#:~:text=Python%20%2D%20Magic%20or%20Dunder%20Methods,class%20on%20a%20certain%20action.)
- [Python Random Module](https://www.tutorialsteacher.com/python/random-module)

## Example projects

- [30 Days Of Code Day 6: Bingo](https://github.com/crixodia/30doc/blob/main/day_6/main.py)
