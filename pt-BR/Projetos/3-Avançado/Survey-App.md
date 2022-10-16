# Survey App

**Tier:** 3-Advanced

Surveys are a valuable part of any developers toolbox. They are useful for
getting feedback from your users on a variety of topics including application
satisfaction, requirements, upcoming needs, issues, priorities, and just plain
aggravations to name a few.

The Survey app gives you the opportunity to learn by developing a full-featured
app that will you can add to your toolbox. It provides the ability to define a
survey, allow users to respond within a predefined timeframe, and tabulate
and present results.

Users of this app are divided into two distinct roles, each having different
requirements:

-   _Survey Coordinators_ define and conduct surveys. This is an administrative
    function not available to normal users.
-   _Survey Respondents_ Complete surveys and view results. They have no
    administrative privileges within the app.

Commercial survey tools include distribution functionality that mass emails
surveys to Survey Respondents. For simplicity, this app assumes that surveys
open for responses will be accessed from the app's web page.

## User Stories

### General

-   [ ] Survey Coordinators and Survey Respondents can define, conduct, and
        view surveys and survey results from a common website
-   [ ] Survey Coordinators can login to the app to access administrative
        functions, like defining a survey.

### Defining a Survey

-   [ ] Survey Coordinator can define a survey containing 1-10 multiple choice
        questions.
-   [ ] Survey Coordinator can define 1-5 mutually exclusive selections to each
        question.
-   [ ] Survey Coordinator can enter a title for the survey.
-   [ ] Survey Coordinator can click a 'Cancel' button to return to the home
        page without saving the survey.
-   [ ] Survey Coordinator can click a 'Save' button save a survey.

### Conducting a Survey

-   [ ] Survey Coordinator can open a survey by selecting a survey from a
        list of previously defined surveys
-   [ ] Survey Coordinators can close a survey by selecting it from a list of
        open surveys
-   [ ] Survey Respondent can complete a survey by selecting it from a list of
        open surveys
-   [ ] Survey Respondent can select responses to survey questions by clicking
        on a checkbox
-   [ ] Survey Respondents can see that a previously selected response will
        automatically be unchecked if a different response is clicked.
-   [ ] Survey Respondents can click a 'Cancel' button to return to the home
        page without submitting the survey.
-   [ ] Survey Respondents can click a 'Submit' button submit their responses
        to the survey.
-   [ ] Survey Respondents can see an error message if 'Submit' is clicked,
        but not all questions have been responded to.

### Viewing Survey Results

-   [ ] Survey Coordinators and Survey Respondents can select the survey to
        display from a list of closed surveys
-   [ ] Survey Coordinators and Survey Respondents can view survey results as
        in tabular format showing the number of responses for each of the possible
        selections to the questions.

## Bonus features

-   [ ] Survey Respondents can create a unique account in the app
-   [ ] Survey Respondents can login to the app
-   [ ] Survey Respondents cannot complete the same survey more than once
-   [ ] Survey Coordinators and Survey Respondents can view graphical
        representations of survey results (e.g. pie, bar, column, etc. charts)

## Useful links and resources

Libraries for building surveys:

-   [SurveyJS](https://surveyjs.io/Overview/Library/)

Some commercial survey services include:

-   [Survey Monkey](https://www.surveymonkey.com/)
-   [Traversy](https://youtu.be/SSDED3XKz-0)
-   [Typeform](https://www.typeform.com/)

## Example projects

[Javascript Questionnaire](https://codepen.io/amyfu/pen/oLChg)

[React Survey App](https://chamatt.github.io/survey-web-app/#/) ([Code](https://github.com/chamatt/survey-web-app))