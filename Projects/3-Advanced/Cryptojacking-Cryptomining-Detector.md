# In-Browser Cryptojacking or Cryptomining Detector

**Tier:** 3-Advanced

Why we need to detect In-Browser Cryptomining or Cryptojacking?
- You might have noticed sometimes when you are using certain websites your cpu usage skyrockets, one of the reasons is Cryptomining or Cryptojacking.

Cryptojacking or Cryptomining Detector is a In-browser mining detector that means it detects crytomining from your browser tabs. The mining tabs uses cryptojacking JAVASCRIPT libraries to use our CPU resourses. Detector requires two behaviours to be studied.

- The browser tab is using any cryptojacking javascript libraries.

- The cpu usage is greater than 80% and perticular tab usage is on the higher side let say 60%.

### What you need to do?
- Webscraping to get the javascript libraries used by a website.
- Compare those libraries with already available cryptomining dataset.
- Check CPU usage of entire PC and each individual tab.
- Check if both cryptojacking libraries used and cpu usage is high or not.

### Requirements and Hints

-   Basic level of webscraping is required to get javascript libraries of URL opened on a tab. ( hint: Use BeautifulSoup( python library ) ).

-   Use one of the below or any other software to get CPU usage of tabs and overall CPU usage of your PC.
    - process monitor
    - process hacker


## User Stories

-   [ ] User can Start/Stop application with single command on terminal.
-   [ ] User can only see tabs that are cryptomining.
-   [ ] User can monitor the cpu usage of detected cryptomining tabs.

## Bonus features
-   [ ] Option to close cryptomining tabs
-   [ ] Make a UI of this Dectector
-   [ ] Give a URL option in UI to check if a perticular URL is cryptojacking or not.
-   [ ] Option to Specify a browser to check for cryptojacking (firefox, edge etc).

## Useful links and resources
-  [DataSet-of-Cryptomining-libraries](https://pure.qub.ac.uk/en/datasets/dataset-for-manic-multi-step-assessment-for-crypto-miners)

#### The below link demonstrate mining on you pc using browser run this link and try detecting cryptomining.
-  [CoinImp](https://www.coinimp.com/)

For CPU usage and browser tab processes
- [Process Monitor](https://learn.microsoft.com/en-us/sysinternals/downloads/procmon)
- [Process Explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)
- [Process Hacker](https://processhacker.sourceforge.io/)

## Example projects
 try to take inspiration your project dont have to exactly be like that and most of things i have given away follow that it will be easy.
- [In-browser-Cryptocurrency-Mining-Detection-using-TaintAssembly](https://github.com/akshaykokane/In-browser-Cryptocurrency-Mining-Detection-using-TaintAssembly)

