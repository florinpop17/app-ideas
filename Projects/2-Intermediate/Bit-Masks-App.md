# Bit Masks

**Tier:** 2-Intermediate

It's difficult to find an app that doesn't rely on some form of conditional
logic to implement its functionality. This is almost always performed using 
statements like:
```
if (processAccount === true) { 
  /* do something */
}
```
If and switch statements work well for a limited number of conditionals, but
what if your app had 10's or 100's of conditionals to evaluate? Luckily, there's
another way.

The goal of the Bit Masks app is demonstrate how to use bit masks to evaluate
longer sequences of switches without having to rely on long strings of 
conditional statements.

## User Stories

-   [ ] User can see a vertical list of checkboxes with the following cities
and their timezones:
    - Moscow: GMT +3
    - Paris: GMT +2
    - Berlin: GMT +2
    - Brussels: GMT +2
    - Amsterdam: GMT +2
    - Rome: GMT +2 
    - London: GMT +1
    - Dublin: GMT +1
    - New York: GMT -4
    - Washington, DC: GMT -4
    - St. Louis: GMT -5
    - Los Angeles: GMT -7
    - Tokyo: GMT +9
    - Beijing: GMT +8
    - Ho Chi Mihn City: GMT +7
    - Mumbai: GMT +5
-   [ ] User can see a GMT search box where an integer representing a GMT offset
can be entered into and a 'Find Cities' button.
-   [ ] User can click the 'Find Cities' button to display the names of the
cities in that GMT offset in an output area.

### Developer Notes

For this exercise the developer should use sequences of 24 
binary bits, each corresponding a GMT time zone from +12 to -12 to map cities
to their timezones. 

Searches should be conducted by combining a bit mask for the desired time zone
against the city-specific bit sequences to identify matches. Determining if a 
city meets the search criteria shouldn't rely on a statement such as
```
if (city[i].gmtOffset === searchOffset ) {
  /* Found it! */
}
```
It should instead rely on a bitwise operation.

## Bonus features

-   [ ] User can search for cities NOT in the GMT offset entered in the 
search box.
-   [ ] User can see a summary count of the number of cities that met the
search criteria.

## Useful links and resources

- [World Time Zones](https://greenwichmeantime.com/time-zone/definition/)
- [Bitwise Operators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

## Example projects

[Bitwise Operation](https://codepen.io/Lunoware/pen/VBZgQd)
