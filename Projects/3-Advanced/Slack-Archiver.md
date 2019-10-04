# Slack Archiver

**Tier:** 3-Advanced

Slack is a tool many teams rely on for collaboration not only between
developers, but also between developers and their users. It's especially
attractive to Open Source Software (OSS) teams since it supports a highly
functional free tier.

One problem is the free tier is limited to a maximum of 10K messages. When
this limit is reached older messages become unavailable since they are
purged. This is very impactful to active Slack teams and communities since
older messages quite often hold a great deal of "institutional knowledge"
that's lost when the message limit is reached.

The Slack Archiver seeks to remedy this situation by extracting the history
for specific channels to an database or file. Messages could be extracted up to
the maximum allowed limit of 50 messages per minute for the `channels.history`
API method. At this rate (tier 4) 86.4K messages could be theoretically
retrieved per day.

Implementers are cautioned that further research will be required to
determine the best extraction method to use prior to attempting any
development of this application.

## User Stories

-   [ ] Allow the user to specify the channels to be archived. This includes both adding and removing channels from the list
-   [ ] Only the owners of the Slack Team should be allowed to archive messages
-   [ ] For each channel to be archived periodically extract messages starting from the last message retrieved in the last extract and write them to a database
-   [ ] Allow the user to copy and extracted channel to a file
-   [ ] Archiving should be an automatic process. Unlike a Slack 'bot, no manual intervention should be required to start or stop and archive operation

## Bonus features

-   [ ] Implement an API that allows an application to extract archived messages from the archive database

## Useful links and resources

Details of the Slack API can be found [here](https://api.slack.com/).

## Example projects

For an example of a commercial archiving application for Slack see
[Chronicle](https://chingu-prework.slack.com/apps/A47KWM6Q4-chronicle)
