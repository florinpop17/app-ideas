# GitTweet

**Tier:** 3-Advanced

In the [GitHub Timeline](./GitHub-Timeline-App.md) app you used GitHub's API to
create a timeline of your repos. What could be more powerful that using an API
such as this? Why using two API's, of course.

The goal of GitTweet is to create a GitHub app to tweet when a pull request
is created for one of your repos. 

## User Stories

-   [ ] User can see an input area tabular display prepopulated with rows for 
each of the GitHub repos she owns and a selection checkbox next to each repo 
name, a single input date field, and a 'Scan' button.
-   [ ] User can click the checkboxes in the repo list to select or deselect
repos for processing.
-   [ ] User can enter a date into the date field. This defines the point after
which any new PR requests will be tweeted.
-   [ ] User can click the 'Scan' button to identify repos that have had a new
PR created that has not been previously tweeted. In other words. Consecutively
entering the same date to scan from should only generate tweets for PR's that
have not yet been tweeted.
-   [ ] User can see an error message if no date was entered, if it is not a
valid date, or if it is a future date.
-   [ ] User can see repos highlighted if a tweet will be generated for them
and the 'Scan' button will change to 'Tweet'.
-   [ ] User may deselect a repo by clicking on its checkbox. Doing this will
change the button back to 'Scan' and clicking it will repeat the search for
repos that have had new PR's (not yet tweeted) created since the scan date 
entered by the user.
-   [ ] User may enter an new scan date at this point which also changes the
button back to 'Scan'.
-   [ ] User may click the 'Tweet' button to send a tweet bearing the following
message - `Pull Requst #<pr-number> created for repo <repo name> - <repo description>`.
-   [ ] User can see this tweet send from her Twitter account.

## Bonus features

-   [ ] User does not need to manually enter a scan date. If omitted the scan
will resume from the last scan date which must persist across sessions.
-   [ ] User may enter a custom tweet message
-   [ ] User repo selections will persist across sessions so they do not have 
to be reselected each time.

## Useful links and resources

- [Twitter Developer Docs](https://developer.twitter.com/en.html)
- [GitHub Apps](https://developer.github.com/apps//)
- GitHub offers two API's you may use to access repo data. You may also choose
  to use an NPM package to access the GitHub API. Documentation for the GitHub 
  API can be found at:

  -   [GitHub REST API V3](https://developer.github.com/v3/)
  -   [GitHub GraphQL API V4](https://developer.github.com/v4/)

  Sample code showing how to use the GitHub API's are:

  -   [GitHub REST API client for JavaScript ](https://github.com/octokit/rest.js/)
  -   [GitHub GraphQL API client for browsers and Node](https://github.com/octokit/graphql.js)

  You can use this CURL command to see the JSON returned by the V3 REST API for
  your repos:

  ```
  curl -u "user-id" https://api.github.com/users/user-id/repos
  ```

## Example projects

[Zapier GitHub Integration](https://zapier.com/apps/github/integrations/twitter)
