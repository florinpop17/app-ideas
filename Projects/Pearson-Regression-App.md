# Pearson Regression

**Tier:** 1-Beginner

There are few, if any, applications that don't require some form of 
cross-disciplinary knowledge in order to implement useful functionality for
a user. In the case of an app for the medical profession it might be domain
expertise in biology or pharmacology. A paint manufacturer or a crop science
business might rely on apps with an intimate knowledge of chemistry. And, a 
payroll application will certainly incorporate HR and accounting concepts.

Regardless of the industry segment an app is developed for one cross domain
expertise in common with them all is mathematics. As an application developer
you don't have to be a mathematician, but it's useful to have an understanding
of how to apply mathematical concepts to the problems you are trying to solve.

The objective of this app is to apply the Pearson Correlation Coefficient
against two sets of data to provide the user with the degree to which they
may or may not be related. For example, given a set of temperatures and another
set of car prices this would let the user test whether or not they are related
(spoiler alert: they are unrelated!).

### Constraints

- The Developer must program all calculations without relying on a package.

## User Stories

-   [ ] User can see an input panel with two input fields allowing entry of `x` 
and `y` coordinates, and 'Add' and 'Calculate' buttons.
-   [ ] User can enter numbers into these boxes where `x` and `y` are observations
from the two data sets.
-   [ ] User can click the 'Add' button to add the `x` and `y` to a tabular
output area listing the pairs of observations.
-   [ ] User can see and error message if either of the two input fields are
empty or do not contain valid real numbers.
-   [ ] User can see the 'Calculate' button is disabled until errors have been
corrected.
-   [ ] User can click the 'Calculate' button to perform the regression analysis
and to display its results.
-   [ ] User can see results of the calculation which include:
    - Arithmetic means for both the `x` and `y` observations
    - Standard deviations for both the `x` and `y` observations
    - Pearson correlation coefficient with one of the following interpretations:
      - No correlation
      - Neutral
      - Some correlation

## Bonus features

-   [ ] User can see a scatter plot of the observations
-   [ ] User can upload observations from a file on the local machine.
-   [ ] User can see a regression line overlaying the scatter plot

## Useful links and resources

- [Pearson Correlation Coefficient (Wikipedia)](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
- [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression)
- [Pearson's Correlation Coefficient](http://www.code-in-javascript.com/pearsons-correlation-coefficient-in-javascript/)

## Example projects

[Correlation](https://memory.psych.mun.ca/tech/js/correlation.shtml)
