# Tourney

**Tier:** 2-Intermediate

The goal of this app is to be able to host a meetup tournament/ladder/playoff game amongst group of participants.  This app can support leagues for tennis, basketball, baseball leagues and others.  Here, the app can list names/teams, of participants, set threshold of max games/matches they can play, and rank players wins and losses.

The app can set the top performing (depends on setting) participants into a playoff bracket.  Send a message to participants as to who are playing, who are winning, who is the champion.
The app can record the scores, win loss columns and history of a players matches.

## User Stories


-   [ ] Users can register
-   [ ] Users can sign in and out of the application
-   [ ] Users can upload their profile photo
-   [ ] Users can set number of matches before a win
-   [ ] Users can set the max available matches before an elimination rounds
-   [ ] Users can recieve email of match updates (daily winners, future matches, eventual league champion
-   [ ] Users can set number of participants
-   [ ] Users can edit brackets (for playoffs mode)
-   [ ] Users can use regular round robin mode or a playoff bracket mode

### Developer Notes

We will need a simple storage like google firebase as a no sql database.  We will use this to support our apps authentication, persist the scores and user information.

We will use sendgrid for email services.

We might use Flutter for this so that we can easily deploy this to IOS and Andriod devices.

## Bonus features

-   [ ] Champs get a free Tourney medal for seasonal league champs with certain amount of participants (ofcourse!) and level of play (we will figure this out per sport).

## Useful links and resources

-   [ ] look up google firebaseapp
-   [ ] look up Flutter
-   [ ] look up node

## Example projects

- cant think of any similar projects 
