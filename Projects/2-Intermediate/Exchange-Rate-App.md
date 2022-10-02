# Exchange Rate App
**Tier:** 2-Intermediate

Create a responsive web app that allows users to convert between different currencies. The app should use the Exchange Rates API to retrieve the latest exchange rates and convert between currencies.

## User Stories

-   [ ] User can see a search box where a currency code can be entered and a 'Find Exchange Rate' button.
-   [ ] User can click the 'Find Exchange Rate' button to display the exchange rate for the currency code entered into the search box in an output area.
-   [ ] User can see a list of N currencies and their exchange rates to the US Dollar.

### Developer Notes

-   The Exchange Rates API is a free service for current and historical foreign exchange rates published by the European Central Bank. You can access the API with this URL: https://api.exchangeratesapi.io/latest

-   The API returns a JSON object with a base currency and a list of exchange rates for different currencies. The API also allows you to specify a base currency and a list of currencies to return exchange rates for. For example, the following URL will return the exchange rates for the Euro and the British Pound:

https://api.exchangeratesapi.io/latest?base=EUR&symbols=GBP

-   The Exchange Rates API also allows you to specify a date to retrieve exchange rates for. For example, the following URL will return the exchange rates for the Euro and the British Pound on January 1, 2019:

https://api.exchangeratesapi.io/2019-01-01?base=EUR&symbols=GBP

-   You can find more information about the API and how to use it here: https://exchangeratesapi.io

## Bonus features
-   [ ] User can see a 'Last Updated' timestamp that indicates when the exchange rates were last updated.
-   [ ] User can see a 'Favorites' button that adds the 'From' and 'To' currencies to a list of favorites
-   [ ] Show a graph of the exchange rate over the last 30 days

## Useful links and resources

-   [Exchange Rates API](https://exchangeratesapi.io/)

## Example projects
[Google Currency Converter](https://www.google.com/search?q=currency+converter)


