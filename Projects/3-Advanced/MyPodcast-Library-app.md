# My Podcast Library

**Tier:** 3-Advanced

In the [GitHub Status](../1-Beginner/GitHub-Status-App.md) and [Podcast Directory](../2-Intermediate/Podcast-Directory-App.md) you learned what web scraping is and how you can
use it as an alternative data source when API's and backend databases aren't
available. The _My Podcast Library_ app merges your newfound knowledge of 
web scraping with your frontend skills to extend the simple Podcast Directory
app into something more complex and useful.

The goal of _My Podcast Library_ is to build a more personalized library of
your favorite podcasts and episodes. In this app you'll use
[Puppeteer](https://github.com/GoogleChrome/puppeteer) and
[Podbean](https://www.podbean.com) to create an app to maintain your
personal library of podcasts.

This project is described in detail by the following user stories, but feel
free to use your imagination.

## User Stories

### Favorite Podcast Display

-   [ ] User can see their favorite podcasts in a tabular display area
-   [ ] User can see the message 'No podcasts added yet' in watermark format
in this area if no podcasts have been added.
-   [ ] User can see an overview of each favorite podcast that has been added
in this area. This includes the podcast icon, it's name, and the number of 
most recent episodes.
-   [ ] User can click on the podcast icon to display a page containing a list
of the most recent episodes.

### Favorite Podcast Entry
-   [ ] User can see a '+' button at the top of the favorite podcast area with
the hover text 'Add a new podcast'
-   [ ] User can click the '+' button to display a popup panel to allow a new
favorite podcast added. This panel contains an input area containing a text
input box for the podcasts page on Podbean (e.g. 
[Techpoint Charlie](https://www.podbean.com/podcast-detail/k76vd-8adc7/Techpoint-Charlie-Podcast)), a 'Save' button, and a 'Cancel' button.
-   [ ] User can click the 'Save' button to validate the URL and add the 
podcast to the favorite podcast area.
-   [ ] User can see a warning message if the url doesn't start with 
```https://www.podbean.com/podcast-detail/``` or if navigating to the page
results in a 404 error.
-   [ ] User can see valid URLs for favorite podcasts retained across sessions.
-   [ ] User can click the 'Cancel' button to discard any data and dismiss the
popup.

### Most Recent Episodes for a Podcast Page
-   [ ] User can see a table of podcast episodes
-   [ ] User can see rows in this table showing a clickable episode icon, the
title of the episode, the date it was originally broadcast, and a heart icon
button to mark it as a favorite.
-   [ ] User can scroll through the list
-   [ ] User can click on the episode icon to display that episodes page on
the Podbean web site.
-   [ ] User can click on an episode's heart icon to mark it as a favorite.
-   [ ] User can click on an episode's heart icon to remove it as a favorite.
-   [ ] User can see the table sorted with most recent episodes at the top, 
followed by those previously marked as favorites.
-   [ ] User can see favorite episodes persist across sessions.

## Bonus features

### Episode Ratings
-   [ ] User can see 5 star icons with each episode that denotes how the user
rates it. 
-   [ ] User may click stars from left-to-right to rate an episode. Stars are
filled or changed to a new color when clicked.
-   [ ] User may change a rating by clicking on the stars from right-to-left
to deselect them.
-   [ ] User can see the list of favorite episodes on the page sorted in
descending rating sequence.

### Searching & Hashtags
-   [ ] User can enter a freeform hashtag with an episode on the most recent
episodes page. This hashtag does not need to be predefined.
-   [ ] User can see a search box on the main page and a 'Search' button
-   [ ] User can enter hashtags in the search box to display a page of episodes
from any podcast with the same format as the most recent episodes page.
-   [ ] User can click on a cancel button on the search results page to return
to the main page.
 
## Useful links and resources

- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Web Scraping with a Headless Browser: A Puppeteer Tutorial](https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll)

## Example projects

N/a
