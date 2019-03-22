# Bin2Dec

**Tier:** 1-Intermediate

The purpose of this app is to allow the user put in practice both, algorithmic and Web Development knowledge by creating a Roman to Decimal numbers converter app.
Please read on.

The numeric system represented by Roman numerals originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet. Roman numerals, as used today, employ seven symbols, each with a fixed integer value, as follows:[1]

See the below table with *Symbol - Value*
 	
 	I - 1
 	V - 5
 	X - 10
 	L - 50
 	C - 100
 	D - 500
 	M - 1000

**Basic decimal pattern**

The original pattern for Roman numerals used the symbols I, V, and X (1, 5, and 10) as simple tally marks. Each marker for 1 (I) added a unit value up to 5 (V), and was then added to (V) to make the numbers from 6 to 9:

**I, II, III, IIII, V, VI, VII, VIII, VIIII, X.**

The numerals for 4 (IIII) and 9 (VIIII) proved problematic (among other things, they are easily confused with III and VIII, especially at a quick glance), and are generally replaced with IV (one less than 5) and IX (one less than 10). This feature of Roman numerals is called subtractive notation.

The numbers from 1 to 10 (including subtractive notation for 4 and 9) are expressed in Roman numerals as follows:

**I, II, III, IV, V, VI, VII, VIII, IX, X.[2]**

The system being basically decimal, tens and hundreds follow the same underlying pattern. This is the key to understanding Roman numerals:

Thus 10 to 100 (counting in tens, with X taking the place of I, L taking the place of V and C taking the place of X):

**X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C.**

Note that 40 (XL) and 90 (XC) follow the same subtractive pattern as 4 and 9, avoiding the confusing XXXX.

Similarly, 100 to 1000 (counting in hundreds):

**C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M.**

Again - 400 (CD) and 900 (CM) follow the standard subtractive pattern, avoiding CCCC.

In the absence of standard symbols for 5,000 and 10,000 the pattern breaks down at this point - in modern usage M is repeated up to three times. The Romans had several ways to indicate larger numbers, but for practical purposes Roman Numerals for numbers larger than 3,999 are seldom if ever used nowadays, and this suffices.

**M, MM, MMM.**

Many numbers include hundreds, units and tens. The Roman numeral system being basically decimal, each power of ten is added in descending sequence from left to right, as with Arabic numerals. For example:

```
39 = "Thirty nine" (XXX+IX) = XXXIX.
246 = "Two hundred and forty six" (CC+XL+VI) = CCXLVI.
421 = "Four hundred and twenty one" (CD+XX+I) = CDXXI.
```

As each power of ten (or "place") has its own notation there is no need for place keeping zeros, so "missing places" are ignored, as in Latin (and English) speech, thus:

```
160 = "One hundred and sixty" (C+LX) = CLX
207 = "Two hundred and seven" (CC+VII) = CCVII
1066 = "A thousand and sixty six" (M+LX+VI) = MLXVI.[3][4]
```
Roman numerals for large numbers are nowadays seen mainly in the form of year numbers (other uses are detailed later in this article), as in these examples:
```
1776 (M+DCC+LXX+VI) = MDCCLXXVI (the date written on the book held by the Statue of Liberty).[5]
1954 (M+CM+L+IV) = MCMLIV (as in the trailer for the movie The Last Time I Saw Paris)[6]
1990 (M+CM+XC) = MCMXC (used as the title of musical project Enigma's debut album MCMXC a.D., named after the year of its release).
2014 (MM+X+IV) = MMXIV (the year of the games of the XXII (22nd) Olympic Winter Games (in Sochi)

The current year (2019) is MMXIX.
```

Source: https://en.wikipedia.org/wiki/Roman_numerals

This challenge requires that the developer implementing it follow these
constraints:

-   Maximum decimal number that can be converted to Roman Numerals is within the range of 1 to 3999

## User Stories

-   [ ] User should enter one Roman number in an input field
-   [ ] The calculation must be done as the user type
-   [ ] User views the results in a single output field containing the
        decimal (base 10) equivalent of the the roman number that was entered.

## Bonus features

-   [ ] As a user I would like to be able to convert from decimal to Roman

## Trello Board

pending...

## Useful links and resources

[An explanation of Roman Numbers](https://en.wikipedia.org/wiki/Roman_numerals)

## Example projects

Try not to view this until you've developed your own solution:

-   [Roman Number Converter](https://www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php)