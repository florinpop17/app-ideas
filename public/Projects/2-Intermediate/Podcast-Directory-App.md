# Podcast Directory

**Tier:** 2-Intermediate

In the [GitHub Status](../1-Beginner/GitHub-Status-App.md) app you learned how to use the
Request package to scrape information from a web page. The Podcast Directory
continues this process and introduces you to another web scraping package - 
[Puppeteer](https://github.com/GoogleChrome/puppeteer).

Although Request is a useful  package it isn't built specifically for web
scraping like Puppeteer. As you gain experience with web scraping you'll find
that there are web sites and applications where web scraping is made easier
by using a tool like Puppeteer that is specifically built for scaping.

It is important to note that while web scraping has its place, the use of
an API or a data source such as a file or database is always preferable to 
scraping information from a page. The reason being that even minor changes to
page styling can render your web scraper inoperable. For example, the change
of a CSS class name your scraping logic is dependent on.

The goal of the Podcast Directory app is to pull the most recent episodes of 
the [Javascript Jabber](https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast)
and [Techpoint Charlie](https://www.podbean.com/podcast-detail/k76vd-8adc7/Techpoint-Charlie-Podcast)
podcasts from [Podbean](https://www.podbean.com) and create a new page that
creates a combined list of episodes, sorted by broadcast date.

## User Stories

-   [ ] User can see a table of podcast episodes
-   [ ] User can see rows in this table showing a clickable episode icon, the
title of the episode, and the date it was originally broadcast.
-   [ ] User can scroll through the list
-   [ ] User can click on the episode icon to display that episodes page on
the Podbean web site.

## Bonus features

-   [ ] User can see rows in the episode table have alternating background
colors.
-   [ ] User can see a summary above the episode table showing the number
of episodes for each podcast.
-   [ ] User can see a clickable checkbox next to each podcast name in the
summary above the episode table.
-   [ ] User can click the radio button next to the podcast name to include
episodes for that podcast in the episode table.

## Useful links and resources

- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Web Scraping with a Headless Browser: A Puppeteer Tutorial](https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll)
- Hint! You can use the following code to help you get started with this
project. You can execute this using the  command line command `node puptest`.
```
// puptest.js
const puppeteer = require('puppeteer');

const run = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast");
      let episodeLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a.title')).map((item) => ({
            url:  item.getAttribute('href'),
            text: item.innerText
          })
        );
      });
      browser.close();
      return resolve(episodeLinks);
    } catch (e) {
      return reject(e);
    }
  })
}

run()
.then(console.log)
.catch(console.error);
```
- When you have completed this project check out the advanced project
[MyPodcast Library](../3-Advanced/MyPodcast-Library-app.md)

## Example projects

N/a
