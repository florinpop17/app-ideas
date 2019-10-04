# Sales Reciepts

**Tier:** 2-Intermediate

In the [First DB App](../1-Beginner/First-DB-App.md) you were able to learn the basics of
how to use the IndexedDB database that's built into the browser. In Sales
Reciepts you'll take this a step further by creating an app that records
point of sales receipts, presumably for subsequent balancing against cash in
the stores cash register.

The objective of Sales Receipts is to implement point-of-sale functionality for
a merchant and to make a record of all sales in a database.

### Requirements & Constraints

- Developer should implement this app as a frontend application that uses the
IndexedDB database in the browser to record all sales receipts.

- Developer may implement the inventory of items available for sale as an
array of objects in the application source. Each item should be defined with
the following attributes:
    - Item number (unique)
    - Description
    - Unit price

- Developer should use her UI/UX skills to create a pleasant and efficient
window layout that makes it easy for the user to purchase items and display 
purchase history.

- The primary use case for a browser based database is to maintain state or 
status information that needs to persist across sessions, or as a work area for 
temporary data. For example, data retrieved from a server that must be 
reformatted or cleansed before it's presented to the user.

- It is important to keep in mind that since the client-side browser environment
cannot be secured you should not maintain any confidential or personal
identifying information (PII) in a browser based database.

## User Stories

-   [ ] User can see an purchase panel containing buttons for each item containing
the item number, description, and unit price, as well as a 'Clear' and a
'Checkout' button.
-   [ ] User can click an item button to make a purchase.
-   [ ] User can see an field displaying the total sale amount incremented as
items are purchased.
-   [ ] User can see a reciept panel displaying the date and time of the sale,
as well as all items selected for purchase. This includes the item number,
description, and unit price.
-   [ ] User can click the 'Clear' button to clear all purchases at any time
before checking out.
-   [ ] User can click the 'Checkout' button to complete purchase all selected
items. The final total purchase amount will be added to the end of the reciept
panel and all selected items will be added to the database.
-   [ ] User can see the receipt panel cleared after all items have been added
to the database.
-   [ ] User can see a 'Daily Sales' and a 'Clear All' button at the bottom of
the app window. 
-   [ ] User can click the 'Daily Sales' button to display all items purchased
by all customers in the receipt panel along with the total of them all.
-   [ ] User can click the 'Clear All' button to clear the receipt panel and
delete the record of all purchases from the database.

## Bonus features

-   [ ] User can see an thumbnail image of the items on the item buttons.
-   [ ] User can see the 'Clear' button replaced by 'Clear Entry' and 'Cancel
All' buttons under the purchase panel
-   [ ] User can click the 'Clear Entry' button to clear the last selected item
from the receipt panel. This has the effect of unselecting that item.
-   [ ] User can click the 'Cancel All' button to clear all purchases made
before checking out.
-   [ ] User can see an input field in the input panel the user may enter the
name of the customer into when a purchase is made. The customer name will be
added to all items purchased by that customer in the receipt panel and in the
rows added to the database.

## Useful links and resources

- [IndexedDB Concepts (MDN)](http://tinyw.in/7TIr)
- [Using IndexedDB (MDN)](http://tinyw.in/w6k0)
- [IndexedDB API (MDN)](http://tinyw.in/GqnF)
- [IndexedDB Browser Support](https://caniuse.com/#feat=indexeddb)

## Example projects

- N/a
