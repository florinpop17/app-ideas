# Ticket Request Processor to JSON

**Tier:** 1-Beginner


-   "What is the purpose of this application?"
    Ideal for a beginner to get used to importing packages and working with the command line and receiving inputs, receiving one line at a time through a basic question and answer before formatting the output and displaying a result to the user. Like Hello World but taking multiple inputs with the ability to format and write to a file.

    The purpose of the application is to take 4 user inputs in this case for a Ticket System, to be run offline if needed such as on site for jobs without internet access.
    - Date Received, Ticket Description, Zone and Ticket Number.
    This is then written to a text file in a JSON output to be further processed by another system or reference to load into a statistics front end site.

    This is done through two imported packages to get the user used to importing packages through the console.
    First package:
    -Inquirer - a package to process user inputs from the command line, question and response.
    -Yargs - Receives a user input through an interactive user interface and then relays this through the console output for the user to view.


-   "Are there any resources needed in order to complete the project?"

Knowledge of how to use the command line to install packages.
NPM install package from the command line from within chosen programming IDE
User will need to run: npm install --save inquirer@^8.0.0
And will need to install yargs: npm install --save yargs 


## User Stories

-   [ ] User can enter ticket values from a service desk or similar enquiry
-   [ ] User can track the number of work tickets completed throughout a day or any period of time
-   [ ] User can is able to upload the JSON data into an external source to display metrics or upload to web based interface (future project)


## Bonus features

-   [ ] User can upload the JSON formatted output into a reading program for an interface


## Useful links and resources

- [NPM Install](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [NPM Inquirer](https://www.npmjs.com/package/inquirer)
- [Yargs JS Dev Page](https://yargs.js.org/)


## Example projects
- [YARGS Project](https://github.com/DCodeAus/YargsProject/)


- [BHMBS - JS-Neumorphic-Calculator](https://barhouum7.github.io/JS-Neumorphic-Calc.github.io/)