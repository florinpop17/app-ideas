# Fast Food Simulator App

**Tier:** 3-Advanced

Fast Food simulates the operation of a simple take-away restaurant and is
designed to help the developer put his or her knowledge of Promises and SOLID
design principles to work.

This app simulates customers of a take-away restaurant placing orders and
and waiting for them to be prepared and delivered to a pickup counter. After
placing the order the customer waits on the order to be announced before
picking it up and proceeding to the dining area.

The user stories that make up this app center around four distinct roles:

- User - the end user using the application
- Customer - the simulated Customer
- Order Taker - the simulated Order Taker
- Cook - the simulated Cook
- Server - the simulated Server

This app has quite a few User Stories. Don't be overwhelmed though. Take the 
time to sketch out not just the UI, but how the different actors (roles) 
interact and incrementally build the app following Agile principles.

### Constraints

- Order tickets can be represented as two different types of Promises - one
the Server waits on while the Cook prepares the order and another the Customer
waits on while in the serving line.
- Use the native equivalent of JS Promises in whichever language you choose
to develop in. JS developers should use native Promises and not `async/await`.
- Create this app using native language features. You may NOT use a simulation
package or library.
- New customers arrive in the order line at a fixed interval of time. In other
words, new customers arrive at a constant rate.
- Order tickets are fulfilled at a fixed interval of time as well. They are
completed at a constant rate.

## User Stories

### Application Operation
-   [ ] User can see an input area that allows the entry of the time interval
for customer arrival and a time interval for the fulfilment of an 
_order ticket_ by the cook.
-   [ ] User can see a customized warning message if the customer arrival
interval or the order fulfilment interval is incorrectly entered.
-   [ ] User can start the simulation by clicking on a Start button.  
-   [ ] User can see an order line area containing a text box showing the 
number of customers waiting to place orders.
-   [ ] User can see an order area containing text boxes showing the
_order number_ currently being taken. 
-   [ ] User can see a kitchen area containing a text box showing the 
_order number_ that's being prepared and a text box listing the waiting 
orders in sequence, along with a count of the number of waiting orders.
-   [ ] User can see a Pickup area containing a text box showing the 
_order number_ that's currently available for pickup by the Customer and a
text box showing the number of Customers waiting in the serving line.
-   [ ] User can stop the simulation at any time by clicking a Stop button. 

## Bonus features

-   [ ] User can specify how long it takes for an Order Taker to create an
_order ticket_.
-   [ ] User can specify how long it takes for the Server to deliver an order
to the customer.
-   [ ] User can specify the total amount of time the simulation is to run
once the Start button has been clicked. 
-   [ ] User can see an animated view of Customers and orders as they move
through the workflow.

## Useful links and resources

- [Fast Food Simulator - Logical Workflow](https://drive.google.com/file/d/1Thfm5cFDm1OjTg_0LsIt2j1uPL5fv-Dh/view?usp=sharing)
- [Agile Manifesto & 12 Principles of Agile Software](http://agilemanifesto.org/)
- [SOLID Principles Every Developer Should Know](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688)
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example projects

- N/a
