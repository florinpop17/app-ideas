# Card-Memory-Game

**Tier:** 2-Intermediate

Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

## User Stories

-   [ ] User can see a grid with n x n cards (`n` is an integer). All the cards are faced down initially (`hidden` state)
-   [ ] User can click a button to start the game. When this button is clicked, a timer will start
-   [ ] User can click on any card to unveil the image that is underneath it (change it to `visible` state). The image will be displayed until the user clicks on a 2nd card

When the User clicks on the 2nd card:

-   [ ] If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the `visible` state)
-   [ ] If there isn't a match, the 2 cards will flip back to their original state (`hidden` state)
-   [ ] When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game

## Bonus features

-   [ ] Use can choose between multiple levels of difficulty (Easy, Medium, Hard). Increased difficulty means: decreasing the time available to complete and/or increasing the number of cards
-   [ ] User can see the game statistics (nr. of times he won / he lost, best time for each level)

## Useful links and resources

-   [Wikipedia](<https://en.wikipedia.org/wiki/Concentration_(game)>)

## Example projects

-   [Flip - card memory game](https://codepen.io/zerospree/full/bNWbvW)
-   [Memory Game](https://jdmedlock.github.io/memorygame/)
-   [SMB3 Memory Card Game](https://codepen.io/hexagoncircle/full/OXBJxV)
-   [BHMBS - Memory Game](https://barhouum7.github.io/JS-MemoryGame.github.io/)