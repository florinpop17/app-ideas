# Link Gatherer

**Tier:** 3-Advanced

This application receives a link (or an IP address), does a DNS name resolve and crawls for all links found on the page that leads to other pages on the same domain.

The objective is to list all pages found on the website.

## User Stories

-   [ ] User can execute the program with an IP address
-   [ ] User can execute the program without a defined port (and port 80 will be set by default)
-   [ ] User can execute the program with a defined port

## Bonus features

-   [ ] User can execute the program with a name address (and a DNS name resolution will occur)
-   [ ] User can scan https websites as well
-   [ ] User can accept other format types (like gzip)
-   [ ] User can format output to get only the local path or the full path (with domain name/IP address prepended)
-   [ ] User can choose to ignore or show dangling links (that return a 404 page or any other code to their choice)

## Useful links and resources

As this program is meant to be made without too much help (from libraries), I suggest you learn:

-   [ ] HTML
    - [HTML Tutorial - W3schools](https://www.w3schools.com/html/default.asp)
    - [HTML Course - SoloLearn](https://www.sololearn.com/Course/HTML/)
-   [ ] HTTP protocol (to build requests and understand responses)
    - [Hypertext Transfer Protocol - Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol): Focus on `Message Format` and `Example Session`
    - [An overview of HTTP - Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview): Focus on `HTTP Flow` and `HTTP Messages`
-   [ ] Socket programming (on the language of your choice)
    - C/C++: [Socket Programming in C/C++ - GeeksForGeeks](https://www.geeksforgeeks.org/socket-programming-cc/)
    - Python: [Socket Programming in Python - GeeksForGeeks](https://www.geeksforgeeks.org/socket-programming-python/)

## Example projects

I could not find anything like this. The closest was [HTTrack](https://www.httrack.com/), but it's main functionality is different.
