# Windchill

**Tier:** 1-Beginner

Windchill combines the actual temperature with the wind speed to calculate
the windchill factor, or what the perceived temperature is versus the actual
temperature.

## User Stories

-   [ ] User can select the measurement system calculations will be performed in - Metric or English
-   [ ] User can enter the actual temperature and the wind speed
-   [ ] User can press the `Calculate` button to display the wind chill
-   [ ] User will receive an error message when `Calculate` is clicked if data values are not entered

## Bonus features

-   [ ] User will receive an error message when `Calculate` is clicked if the resulting wind chill factor is greater than or equal to the actual temperature. Since this signifies an internal error in the calculation you may also satisfy this requirement using an assertion
-   [ ] User will be prompted to enter new data values if `Calculate` is pressed without first changing at least one of the input fields
-   [ ] User will see an updated wind chill factor whenever new actual temperature or wind speed values are entered, without being required to click the `Calculate` button

## Useful links and resources

-   [Wikipedia Wind Chill](https://en.wikipedia.org/wiki/Wind_chill)
-   [JavaScript Assert](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)

## Example projects

[Wind Chill Calculator](http://www.jsmadeeasy.com/javascripts/Calculators/Wind%20Chill%20Calculator/index.htm)
[Svelte Wind Chill Index by Gabriele Corti](https://codepen.io/borntofrappe/pen/WNNrrJg)
