# Elevator

**Tier:** 3-Advanced

It's tough to think of a world without elevators. Especially if you have to
walk up and down 20 flights of stairs each day. But, if you think about it 
elevators were one of the original implementations of events and event handlers
long before web applications came on the scene.

The objective of the Elevator app is to simulate the operation of an elevator
and more importantly, how to handle the events generated when the buildings
occupants use it. This app simulates occupants calling for an elevator from
any floor and pressing the buttons inside the elevator to indicate the floor
they wish to go to. 

### Constraints

- You must implement a single event handler for the up and down buttons on
each floor. For example, if there are 4 floors a single event handler should
be implemented rather than 8 (two buttons per floor).
- Similarly, a single event handler should be implemented for all buttons on
the control panel in the elevator rather than a unique event handler for each
button.

## User Stories

-   [ ] User can see a cross section diagram of a building with four floors,
an elevator shaft, the elevator, and an up button on the first floor, up and 
down buttons on the second and third floors, and a down button on the fourth
floor.
-   [ ] User can see the elevator control panel with a button for each of the
floors to the side of the diagram.
-   [ ] User can click the up and down button on any floor to call the 
elevator.
-   [ ] User can expect that clicking the up and down buttons on any floor
to request the elevator will be queued and serviced in the sequence they were
clicked.
-   [ ] User can see the elevator move up and down the shaft to the floor it
was called to.
-   [ ] User can click the elevator control panel to select the floor it
should travel to.
-   [ ] User can expect the elevator to pause for 5 seconds waiting for a
floor button on the control panel to be clicked. If a floor button isn't
clicked within that time the elevator will process the next call request.
-   [ ] User can expect the elevator to return to the first floor when there
are no requests to process.

## Bonus features

-   [ ] User can see a warning sound if the number of elevator requests
exceeds the maximum number allowed. This limit is left to the developer.
-   [ ] User can hear a sound when the elevator arrives at a floor.
-   [ ] User can see an occupant randomly arrive at a floor to indicate when
the user should click the up or down elevator call button on that floor.
-   [ ] User can specify the time interval between new occupants arriving to
call an elevator.

## Useful links and resources

[First-in, first out queue (Wikipedia)](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))

## Example projects

[Elevator](https://codepen.io/nibalAn/pen/prWdjq)
