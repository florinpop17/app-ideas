# Flip Art

**Tier:** 2-Intermediate

Many developers have found that adding animation to an application is a
useful technique that adds impact to the UI, to make it more appealing to its users,
and to explain complex subject matter. But, as a developer how do you create 
these and how do you know what images make effective animations?

The objective of the Flip Art app is to address both of these needs by 
providing a simple way to collect and arrange a set of images into an
animated sequence that can be replayed and adjusted to achieve the desired
impact and effect.

### Requirements & Constraints

Developers should not rely on animation or graphics libraries to implement
this app. Instead, try using vanilla Javascript, CSS, and HTML.

## User Stories

-   [ ] User can see the following primary components in the app window:
    - Configuration panel containing elements used to tailor the animation
    process.
    - Operation buttons
    - Animation display panel animations will be presented in

### Configuration Panel
-   [ ] User can see eight thumbnails that will contain individual animation 
frames
-   [ ] User can see a button under each thumbnail - '+'
-   [ ] User can click the '+' button to add a new image to an empty thumbnail
-   [ ] User can see a file open dialog when the '+' button is clicked to 
allow an `.jpg` image to be loaded into the thumbnail. 
-   [ ] User can see the '+' button label change to '-' after a thumbnail is
loaded.
-   [ ] User can click the '-' button to remove or replace a thumbnail.
-   [ ] User can see an 'Transition Speed' slider control. 
-   [ ] User can adjust the 'Transition Speed' slider from slow to fast to
adjust the transition time between thumbnails in the Animation Display.

### Operation Buttons
-   [ ] User can see two buttons - 'Clear Configuration' and 'Start Animation'
-   [ ] User can see the 'Start Animation' button disabled until at least one
thumbnail has been added via the Configuration Panel.
-   [ ] User can click the 'Clear Configuration' button to clear all thumbnails
from the configuration panel.
-   [ ] User can click the 'Start Animation' button to begin the Animation 
Display panel
-   [ ] User can see the 'Start Animation' button label change to 'Stop
Animation' once an animation has been started.
-   [ ] User can click the 'Stop Animation' button to halt the animation in
the animation display
-   [ ] User can see the 'Stop Animation' button label change to 'Start
Animation' when an animation has been stopped.

### Animation Display Panel
-   [ ] User can see thumbnails added in the Configuration panel displayed
when theh 'Start Animation' button is clicked. 
-   [ ] User can see thumbnails transtion from one to the next at the rate
defined by the 'Transition Speed' slider.

## Bonus features

-   [ ] User can see the border around the thumbnail in the Configuration Panel
highlighted when that thumbnail is displayed in the Animation Display panel.
-   [ ] User can dynamically add any number of thumbnails rather than being
restricted to just eight.
-   [ ] User can hear unique sounds associated with modifying thumbnails in the 
Configuration Panel.
-   [ ] User can see a transition type dropdown in the Configuration Panel to
define the transition effect between thumbnails in the Animation Display - 
ease, ease-in, ease-out, ease-in-out
-   [ ] User can drag and drop thumbnails to reorder them
-   [ ] User can save the animation as a `.gif` file.

## Useful links and resources

- [How to Make Flip Book Animation](https://www.youtube.com/watch?v=Njl-uqnmBGA)
- [CSS Animation (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Using CSS Transitions (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [CSS Transition (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

## Example projects

[FlipAnim](http://flipanim.com/)
