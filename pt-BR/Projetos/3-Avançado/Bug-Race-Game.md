# Bug Race

**Tier:** 3-Advanced

In this project you will test your animation skills by creating a game that
lets the user race bugs while trying to guess the winner. As part of this
you'll need to provide the user with various controls that allow the game to
be customized including bug icons, assigning names to the bugs, making a choice 
of who the winner might be, and bug speed.

### Constraints
- The developer will need to select the bug icons to be used in the game
- The developer should randomly adjust the speed of each bug before a race
starts so they travel at different rates within the speed selected by the
user (slow, normal, or fast).
- It is up to the developer to define the speed ranges associated with the slow,
normal, and fast speed setting.
- You may use an animation library, but you'll get more out of this project
if you try to implement it using native language features.

## User Stories

-   [ ] User can see: 
    - An input panel containing controls to configure the game's UI and 
    operation.
    - A race track consisting of four horizontal lanes the bugs will travel in
    - A radio button associated with each lane to allow the user to select a 
    potential winner
    - A 'Start' button.

### Game Controls
-   [ ] User can see the following controls in the input panel.
    - A list of race lane numbers with radio buttons for each showing
      thumbnails for three unique bugs, and a text box the user can use to 
      give the bug a name.
    - An Speed selection control with three radio buttons - Slow, Normal, Fast
-   [ ] User can click a radio button to select the bug icon to be assigned
to a lane. 
-   [ ] User can see an warning message if the same icon is selected for more
than one lane.
-   [ ] User can enter a name for the bug in each lane.
-   [ ] User can see an error message if the same name is repeated for more than
one bug.
-   [ ] User can select the bug speed by clicking one of the Speed radio buttons

### Racing

-   [ ] User can select a potential winner by clicking on the radio button on
any lane.
-   [ ] User can start a race by clicking on the 'Start' button
-   [ ] User can see the 'Start' button is disabled until the race is over
-   [ ] User can see an error message if no winner was selected.
-   [ ] User can see bugs race across their assigned lane to the finish line
-   [ ] User can see all bugs stop moving when the first one reaches the finish
line
-   [ ] User can see game metrics updated to show the number of races run in
this session.

## Bonus features

-   [ ] User can see race metrics for each bug showing the number of races
run, number of wins, and number of losses.
-   [ ] User can see the winning bug bounce when it wins a race
-   [ ] User can see loosing bugs flip on their backs when they loose a race
-   [ ] User can hear unique sounds played when the race starts and ends.

## Useful links and resources

- [3D Bug Images](https://www.google.com/search?q=3d+bug+drawings&tbm=isch&source=hp&sa=X&ved=2ahUKEwjxkNT7--jhAhUI-6wKHW3_CgQQsAR6BAgHEAE&biw=1279&bih=550)
- [Basic Animations (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
)
- [How to build a simple Sprite animation in Javascript](https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa)
- [Javascript Animations](https://javascript.info/animation)

## Example projects

- [Arcade Game](https://jdmedlock.github.io/arcadegame/)
- [Drag Race Animation](https://codepen.io/Delime/pen/IyuAr)
- [Horse Race](https://codepen.io/nathanielzanzouri/pen/jVgEZY)