# Timezone Slackbot - TZ

**Tier:** 2-Intermediate

Team members often need to find out each others timezone as the first step
in finding times for meetings and pair programming sessions. To help with this
the Timezone Slack bot accepts as list of Slack user names and displays the
the timezone for each user in a stacked format as follows:

```
      -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 +1 +2 +3 +4 +5 +6 +7 +8 +9 +10 +11 +12 +13 +14
Fred                           X
Nisha                                                       X
Ming                                                              X
  .
  .
  .
```

Note that this format is provided for descriptive purposes only. When
implemented a more pleasing and user-friendly format may be used.

## User Stories

-   [ ] User can enter `/tz <user-name> <user-name>...<user-name>` to display tabular representation showing each users timezone
-   [ ] User can see information displayed using alternate row colors to increase clarity and readability

## Bonus features

-   [ ] User can see the persons timezone displayed next to their name. For example, 'IST' for India Standard Time

## Useful links and resources

More information about timezones can be found [here](https://www.timeanddate.com/time/current-number-time-zones.html)

## Example projects

[Quickly Determine What Country and Time Zone Your Coworkers Are in This Week Using This Tool](https://lifehacker.com/quickly-determine-what-country-and-time-zone-your-cowor-1833011887)
