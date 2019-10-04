# Contribution Tracker

**Tier:** 3-Advanced

In the [Charity Finder](../2-Intermediate/Charity-Finder-App.md) project you created an app to
help you locate a charity worthy of your contributions. Once a contribution
has been made the goal of the Contribution Tracker app is to track it so to
provide users with a record of all contributions for use in monitoring how
funds are being directed and to provide records for financial reporting 
purposes. For example, for tax reporting.

### Constraints

- Developers may use Vanilla JS, or a framework of their choice (like React,
VueJS, etc.).

- Developers should not use libraries for calculating and manipulating monetary
amounts. All calculation and formatting should be done in the language chosen
to develop the application.

- Developers may use a graphics presentation library or service of their choice,
like [AMCharts](https://www.amcharts.com/).

- Developers may choose to have transactions persist across sessions using
either files or databases. Sensitive data, like transactions, must not be 
maintained in local storage. Remember that although you can implement
protections it is impossible to totally secure browser applications.

## User Stories

-   [ ] User can see a Navigation Bar at the top of each page containing the
application name and a "hamburger" menu with these option:
    - Dashboard
    - Transactions
-   [ ] User can see a Footer Bar at the bottom of each page containing an
About link

### Dashboard Page
-   [ ] User can see the Dashboard page when the app is started containing 
graphical summaries of the following key metrics. The graphical representation
for each is left up to the Developer.
    - Contributions by month for the current year
    - Total contributions by year
    - Contribution increase/decrease by year
    - Average contribution amount by month and year
-   [ ] User can return to the Dashboard page, if currently on another page, by
clicking on the 'Dashboard' option in the hamburger menu in the Navigation Bar.

### Transactions Page
-   [ ] User can see a transaction input panel containing the following:
    - Transaction date
    - Payee name
    - Amount
    - Memo
    - Action buttons - 'Clear', 'Add'
-   [ ] User can see a tabular transaction ledger containing previously 
entered transactions. Each row will also contain a 'Modify' and a 'Delete' 
button.
-   [ ] User can enter values describing the transaction into the input fields
-   [ ] User can click the 'Clear' button to reset all input fields to an
empty state.
-   [ ] User can click the 'Add' button to validate the input that has been
entered, add the validated entry to the transaction ledger, and clear the input
fields.
-   [ ] User can see a consolidated error message detailing any errors detected
in input fields, including:
    - Invalid date 
    - Blank Payee name
    - Non-numeric amount field
-   [ ] User can click on the 'Update' button to modify a previously entered
transaction. The transaction details will be copied to the transaction input
panel and the 'Add' button will change to 'Modify'.
-   [ ] User can change values in the input fields and click the 'Modify' to
validate the input and update that transactions entry in the ledger. If
successful the 'Modify' button will change back to 'Add' and the input fields
will be cleared.
-   [ ] User can click the 'Delete' button to remove a previously entered
transaction. A popup dialog will be displayed containing 'Cancel' and 'Okay'
buttons to cancel or confirm the delete. If the delete is confirmed the 
transaction will be removed from the ledger.
-   [ ] User can return to the Transactions page, if currently on another page,
by clicking on the 'Transactions' option in the hamburger menu in the Navigation
Bar.

### About Page
-   [ ] User can click the About link in the Footer Bar to display information
about the Developer.
-   [ ] User can see links to the Developers GitHub and social media accounts 
including social media icons (like the Twitter icon).

## Bonus features

-   [ ] User can click in the transaction date field to display a calendar
the date can be selected from rather than manually entering it.
-   [ ] User can see alternating row background colors in the transaction ledger.
-   [ ] User can click on a column heading in the transaction ledger to toggle
the sort sequence on the values in that column.
-   [ ] User can see a PDF option near the Transaction Ledger to create a PDF
of all transactions (Hint: checkout how this capability can be implemented via 
[Puppeteer](https://github.com/GoogleChrome/puppeteer)).

## Useful links and resources

- [How to Handle Monetary Values in Javascript](https://frontstuff.io/how-to-handle-monetary-values-in-javascript)
- [How to Format Number as Currency](https://flaviocopes.com/how-to-format-number-as-currency-javascript/)
- [Mintable (GitHub)](https://github.com/kevinschaich/mintable)

## Example projects

N/a
