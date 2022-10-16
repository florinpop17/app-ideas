# StringArt

**Tier:** 2-Intermediate

The purpose of String Art is to provide the developer with practice creating a
simple animated graphic, using geometry in the animation algorithm, and
creating something that's visually pleasant to watch.

String Art draws a single multicolored line which smoothly moves until one
end touches a side of the enclosing window. At the point it touches a "bounce"
effect is applied to change it's direction.

A ripple effect is created by only retaining 10-20 images of the line as it
moves. Older images are progressively faded until they disappear.

Animation libraries are not allowed. Use only Vanilla HTML/CSS/JavaScript.

## User Stories

-   [ ] Start by drawing a multicolored line at a random position within the boundary of it's enclosing window
-   [ ] Each 20ms draw a new copy of the line at a new position based on a trajectory - the incremental distance from the previous line based on the endpoints
-   [ ] When either endpoint of the line touches the boundary of the enclosing window change it's direction and randomly alter its angle
-   [ ] Progressively fade the intensity of old lines so that only the most recent 10-20 lines are visible to create the sense of movement or "ripple"

## Bonus features

-   [ ] User can specify the length of the line and it's velocity
-   [ ] User can specify the multiple lines within the window, all moving along different trajectories and velocities

## Useful links and resources

-   [Using Multistep Animations & Transitions](https://css-tricks.com/using-multi-step-animations-transitions/)
-   [Animation Basics](https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/a/what-are-animations)

## Example projects

This project is very close, but has a small enclosing window and is monochromatic.
[Daniel Cortes](https://codepen.io/dgca/pen/dpxreO)
