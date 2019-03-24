# Battleship Game Engine

**Tier:** 3-Advanced

Battleship Game Engine (BGE) implements the classic turn-based board game as a
package that's separated from any presentation layer. This is a type of
architectural pattern that useful in many application since it allows
any number of apps to utilize the same service.

The BGE itself is invoked through a series of function calls rather than
through directly coupled end user actions. In this respect using the BGE is
is similar to using an API or a series of routes exposed by a web server.

This challenge requires that you develop the BGE and a very thin, text-based 
presentation layer for testing that's separate from the engine itself. Due to
this the User Stories below are divided two sets - one for the BGE and one
for the text-based presentation layer. 

## User Stories

### BGE

-   [ ] Caller can invoke a `startGame()` function to begin a 1-player game. This
function will generate an 8x8 game board consisting of 3 ships having a width of
one square and a length of:
    * Destroyer: 2 squares
    * Cruiser: 3 squares
    * Battleship: 4 squares

    `startGame()` will randomly place these ships on the board in any direction and
will return an array representing ship placement and an array representing 
hits and misses that will be passed to other BGE game functions. For the
duration of the game these arrays represent the game state and they should NOT
be modified by the caller.
-   [ ] Caller can invoke a `shoot()` function passing the target row and column 
coordinates, the array representing ship placement, and the array representing
hits and misses. `shoot()` will return indicators representing if the shot
resulted in a hit or miss, the number of ships left (i.e. not yet sunk), the 
ship placement array, and an updated hits and misses array.

    Cells in the hits and misses array will contain a space if they have yet
    to be targeted, `O` if they were targeted but no part of a ship was at that
    location, or `X` if the cell was occupied by part of a ship.

### Text-based Presentation Layer

-   [ ] User can see the hits and misses array displayed as a 2 dimensional
character represention of the game board returned by the `startGame()` function.
-   [ ] User can be promted to enter the coordinates of a target square on the
game board.
-   [ ] User can see an updated hits and misses array display after taking a
shot.
-   [ ] User can see a message after each shot indicating whether the shot
resulted in a hit or miss.
-   [ ] User can see an congratulations message after the shot that sinks the
last remaining ship. 
-   [ ] User can be prompted to play again at the end of each game. Declining
to play again stops the game.

## Bonus features

### BGE

-   [ ] Caller can specify the number of rows and columns in the game board as
a parameter to the `startGame()` function.
-   [ ] Caller can invoke a function that returns a Javascript object containing
metrics for the current game. For example, number of turns played, current 
number of hits and misses, etc.
-   [ ] Caller can specify the current player number in function calls to allow
1 or two player games.

### Text-based Presentation Layer

- TBD

## Project Board

You can track your progress by cloning this [TBD](url-goes-here)

## Useful links and resources

- [Battleship Game (Wikipedia)](https://en.wikipedia.org/wiki/Battleship_(game))
- [Battleship Game Rules (Hasbro)](https://www.hasbro.com/common/instruct/battleship.pdf)

## Example projects

This YouTube video shows how a text-based
[Battleship Game](https://www.youtube.com/watch?v=TKksu3JXTTM) is played.

The following example is provided as a demonstration of the Battleship game
if it is unfamiliar to you. Remember you are to implement a text based 
presentation layer for testing.
[Battleship Game by Chris Brody](https://codepen.io/CodifyAcademy/pen/ByBEOz)
