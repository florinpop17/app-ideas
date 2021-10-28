# GitHub Status

**Tier:** 1-Beginner

Web apps acquire data in many ways. Through user input in web pages, through
API's to backend systems, from files and databases, and sometimes by "scraping"
websites. The objective of the GitHub Status app is to introduce you to one
way to scrape information from another web site.

GitHub Status uses the NPM Request package to retrieve the current GitHub site
status from the [GitHub Status](https://www.githubstatus.com/) web site. The
Request package allows websites to be retrieved not to a browser window, but
as a JSON document that can be readily accessed by your code.

Although this application specification relies heavily on Javascript, feel free
to develop it using your language of choice!

## User Stories

-   [ ] User can see the current status for GitHub Git operations, API Requests,
Operational Issues, PRs, Dashboard, & Projects, Operational Notifications,
Operational Gists, and Operational GitHub Pages as a list in the main app
window.
-   [ ] User can retrieve the most recent status from the GitHub Status web
site by clicking a 'Get Status' button.

## Bonus features

-   [ ] User can see any of the GitHub components that are not in 'Operational'
status highlighted by a different color, background animation, or any other
technique to make it stand out. Use your imagination!

## Useful links and resources

- [Web Scraping (Wikipedia)](https://en.wikipedia.org/wiki/Web_scraping)
- [NPM Request](https://www.npmjs.com/package/request)
- [Javascript JSON (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Javascript Object Notation](https://json.org/)
- Hint! You can use the following code to display the JSON for the GitHub Status
web site page from the command line command `node ghstatus`. You can use this 
output to determine which JSON element contain the status information you'll 
need to develop this app.
```
ghstatus.js

const request = require('request');
request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    console.log(body);
});
```

## Example projects

- [Peter Luczynski's example](https://peterluczynski.github.io/github-status/)
- [Diogo Moreira's example](https://diogomoreira.github.io/github-status/)
