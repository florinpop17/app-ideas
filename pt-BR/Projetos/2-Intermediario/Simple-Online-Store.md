# Simple Online Store

**Tier:** 2-Intermediate

In the [Product Landing Page](../1-Beginner/Product-Landing-Page.md) project you implemented
a landing page to provide your users with information about a product and to
hopefully increase your sites conversion rate.

The goal of the Simple Online Store is to give your users the capability of 
selecting a product to purchase, viewing purchase information, adding it to
an online shopping cart, and finally, actually purchasing the products in the
shopping cart.

### Constraints

- Starting out you may implement your product inventory as an array of 
Javascript objects if you are developing in Javascript. For other languages
feel free to choose the in memory solution of your choice.

## User Stories

-   [ ] User can click on a `View Products` button on the Landing Page to 
display the Products Page.
-   [ ] User can see a card on the Products Page for each
Product showing the product thumbnail, name, price, a short description,
and a `Select` button.
-   [ ] User can see a Product Details page displayed when the `Select` button
is clicked showing the same information from the product card, but also a 
unique product id, a long description, `Add to Cart` button, and a 
`See More Products` button.
-   [ ] User can see a confirmation message when the product is added to the
shopping cart.
-   [ ] User can click on the `See More Products` page to return to the 
Products Page. 
-   [ ] User can see a `Shopping Cart` button on both the Landing
Page or the Products Page. Hint:  a top bar might be a good common location
for this button.
-   [ ] User can click on the `Shopping Cart` button to display the Shopping
Cart page containing the product id, name, price, and quantity
ordered input box for each product previously added to the Shopping Cart.
-   [ ] User can see a total purchase amount on the Shopping Card that is
calculated as the sum of the quantities multiplied by the unit price for each
product ordered.
-   [ ] User can adjust the quantity ordered for any product to adjust the
total purchase amount. 
-   [ ] User can click a `Place Order` button on the Shopping Cart Page to 
complete the order. User will see a confirmation number when the order has been
placed.
-   [ ] User can click a `Cancel Order` button on the Shopping Cart Page to 
cancel the order. User will see the product quantities and the total purchase
amount reset to zero.
-   [ ] User can click a `See More Products` button on the Shopping Cart Page
to return to the Products Page. If the order hasn't been placed yet this will
not clear the products that have already been added to the Products Page.

## Bonus features

-   [ ] User can see an error message if the quantity ordered exceeds the 
"on hand" quantity of the product.
-   [ ] User can specify a bill to and ship to address when the order is
placed from the Shopping Cart Page
-   [ ] User can see shipping charges added to the total purchase amount
-   [ ] User can see sales taxes added to the total purchase amount
-   [ ] Developer will implement the product inventory in an external file or
a database.

## Useful links and resources

There are plenty of eCommerce Site Pages out there. You can use [Dribbble](https://www.dribbble.com) and [Behance](https://www.behance.net) for inspiration.

## Example projects

-   [eCommerce Animations](https://codepen.io/RSH87/pen/RagqEv)

