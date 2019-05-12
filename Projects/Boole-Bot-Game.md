# Boole Bots Game

**Tier:** 3-Advanced

Boole Bots is a game that is not only fun, but also an aid in helping to 
understand basic Boolean logic. This game has an arena of 8x8 game tiles in
which your bots move at random speeds and trajectories. The Bots are assigned
boolean values of 0 or 1 and boolean operations - AND, OR, NOR, NOT. 

When a bot collides with another bot its boolean operation is applied to both
it and the other bots' boolean value to determine which one wins or looses, or
if the collision results in a tie. Loosing bots disappear and winning bots 
continue moving about the arena until only one remains.

### Requirements & Constraints

- Developers may use graphics and game physics libraries to build the game.

## User Stories

-   [ ] User can see the game window with these components
    - Game configuration input panel
    - Leaderboard showing bots ranked by their scores
    - Game controls
    - Arena of 8x8 game tiles where the bots battle

### Game Configuration Panel
-   [ ] User can see a game configuration panel with these subcomponents:
    - Four bot panels with controls to allow the user to input a unique bot 
    name, select its Boolean value and operation, select the bots speed using a 
    slider, and a dropdown to specify its starting direction - North, South, 
    East, West
-   [ ] User can enter a unique name for each bot into an input text box
-   [ ] User can see an error message if the name entered is the same name
assigned to another bot.
-   [ ] User can select the bots Boolean value (0 or 1) from a dropdown.
-   [ ] User can select a bots Boolean operation from a dropdown - AND, OR, XOR,
or NOT.
-   [ ] User can move the speed slider to set a bots speed
-   [ ] User can select a bots starting direction from the direction dropdown.
-   [ ] User can see the bot randomly assigned to a tile in the arena once its
name has been defined.

### Game Controls
-   [ ] User can a button in the game control panel to 'Battle!'
-   [ ] User can click the 'Battle!' button to start the bot battle in the arena.
-   [ ] User can see bots move based on the speed and direction assigned to them.
-   [ ] User can see the 'Battle!' button text change to 'Stop!' once a battle
is started.
-   [ ] User can click the 'Stop!' button to halt gameplay
-   [ ] User can see the 'Stop!' button text change back to 'Battle!' once a
single bot wins the match.

### Arena
-   [ ] User can see bots bounce off the boundary walls of the arena in a new
direction
-   [ ] User can see bots pause for an instant when they collide.
-   [ ] User can see a bot disappear after colliding if the result of it's 
boolean operation appied to its boolean value and that of the bot is has 
collided with result in 0.
-   [ ] User can see a bot that wins a collision resume its path at the same 
speed and direction.
-   [ ] User can see both colliding bots resume their paths at the same speed
and direction in the event of a tie. In other words, when the collision resulted
in the same boolean result (0 or 1) for both.
-   [ ] User can see gameplay stop when only one bot remains.

### Leaderboard
-   [ ] User can see the display of wins and losses for each bot on the
leaderboard
-   [ ] User can see the tally of wins incremented for bots winning a collision.
-   [ ] User can see the tally of losses decremented for bots loosing a collision.

## Bonus features

-   [ ] User can see a log panel displaying the details of game milestones.
Hint: This may be useful to the Developer during development and debugging.
-   [ ] User can see a game clock displaying current elapsed game time that is
updated every second.
-   [ ] User may choose a bots starting direction as North, Northeast, Southeast,
South, Southwest, West, or Northwest.
-   [ ] User may specify the dimensions of the arena.
-   [ ] User may select an unique icon for a bot from a palette of icons. Icons
in the palette are disabled once they are assigned.
-   [ ] User can see the bot with the most wins highlighted in some way in the
Leaderboard.

## Useful links and resources

- [George Boole (Wikipedia)](https://en.wikipedia.org/wiki/George_Boole)
- [Boolean Algebra (Wikipedia)](https://en.wikipedia.org/wiki/Boolean_algebra)
- [Video Game Physics Tutorial - Part I: An Introduction to Rigid Body Dynamics](https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics)

## Example projects

- N/a
