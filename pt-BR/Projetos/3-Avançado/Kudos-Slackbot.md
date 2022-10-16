# Kudo's Slackbot

**Tier:** 3-Advanced

Have you ever recognized a team mate's contributions or assistance in a Slack
channel only to find that it's lost after a few days? Let _*Kudo's*_ come to
the rescue.

Kudo's is a Slackbot that allows you to create a recognition of someone else's
efforts and to make it available through a simple Slack command.

## User Stories

-   [ ] User can create a kudu using the Slack command: `/kudo add <slack-id> <text>` where:

    -   `<slack-id>` defines the individual receiving the recognition
    -   `<text>` is your kudo for that person

-   [ ] User can modify a kudu using the Slack command: `/kudo replace <kudo-id> <text>` where:

    -   `<action>` is 'replace' or 'delete'
    -   `<kudo-id>` is the kudo identifier
    -   `<text>` is your kudo for that person

-   [ ] User can delete a kudu using the Slack command: `/kudo delete <kudo-id>`

-   [ ] User may display the most recent _n_ kudos using the Slack command: `/kudo list <n>` where `n` is an integer or `*` for all kudos

-   [ ] User may display all kudos for an individual with the Slack command: `/kudo user <slack-id>`

## Bonus features

-   [ ] User may list the individual having the most kudos, in descending order, user the Slack command: `/kudo top <n>` where `n` is an integer or `*` for all individuals who have received a kudo

## Useful links and resources

-   [Slack API](https://api.slack.com/)

## Example project

-   [Kudos Slackbot Example](https://cubic-quince.glitch.me/)
-    
