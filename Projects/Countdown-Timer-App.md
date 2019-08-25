# Countdown Timer

**Tier:** 1-Beginner

We all have important events we look forward to in life, birthdays,
anniversaries, and holidays to name a few. Wouldn't it be nice to have an app
that counts down the months, days, hours, minutes, and seconds to an event?
Countdown Timer is just that app!

The objective of Countdown Timer is to provide a continuously decrementing
display of the he months, days, hours, minutes, and seconds to a user entered
event.

### Constraints

- Use only builtin language functions for your calculations rather than relying
on a library or package like [MomentJS](https://momentjs.com/). This assumes,
of course, that the language of your choice has adequate date and time
manipulation functions built in.
- You may not use any code generators such as the 
[Counting Down To](https://countingdownto.com/) site. You should develop your
own original implementation. 

## User Stories

-   [ ] User can see an event input box containing an event name field, an
date field, an optional time, and a 'Start' button.
-   [ ] User can define the event by entering its name, the date it is
scheduled to take place, and an optional time of the event. If the time is 
omitted it is assumed to be at Midnight on the event date in the local time
zone.
-   [ ] User can see a warning message if the event name is blank.
-   [ ] User can see a warning message if the event date or time are incorrectly
entered. 
-   [ ] User can see a warning message if the time until the event data and time
that has been entered would overflow the precision of the countdown timer.
-   [ ] User can click on the 'Start' button to see the countdown timer start
displaying the days, hours, minutes, and seconds until the event takes place.
-   [ ] User can see the elements in the countdown timer automatically
decrement. For example, when the remaining seconds count reaches 0 the remaining
minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display. 

## Bonus features

-   [ ] User can save the event so that it persists across sessions
-   [ ] User can see an alert when the event is reached
-   [ ] User can specify more than one event. 
-   [ ] User can see a countdown timers for each event that has been defined.

## Useful links and resources

- Images of analog tube-based countdown timers can be found 
[here](https://nixieshop.com/)
- [`clearInterval` MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
- [`setInterval` MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [Date MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Example projects

[Simple Clock/Countdown Timer](https://codepen.io/karlo-stekovic/pen/OajKVK)
[Countdown Timer built with React](https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/)
