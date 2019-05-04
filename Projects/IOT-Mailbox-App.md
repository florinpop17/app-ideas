# IOT Mailbox Simulator

**Tier:** 1-Beginner

The objective of the IOT Mailbox Simulator is to mimic how an Internet of Things
(IOT) enabled physical mailbox might be used to notify you when "snail" mail 
has arrived. In doing so it will provide you with experience using callbacks
to communicate state between different components of an app that are dependent
on one another.

### Requirements & Constraints

- Even though this app is specified using Javascript concepts and terminology
you are free to implement it in the language of your choice. 

- The following Javascript class is provided to start and stop the monitoring
process, and to signal the app web page with the state of the mailbox door
(open or closed) at preset intervals. Keep in mind that the interval you specify
shouldn't exceed the time it normally takes to open or close the door or you
might miss a delivery!
```
/**
 * Monitor the light levels inside an IOT enabled snail mailbox to detect
 * when the mailbox door has been opened and closed.
 * @class IOTMailbox
 */
class IOTMailbox {
  /**
   * Creates an instance of IOTMailbox.
   * @param {number} [signalInterval=500] Timer interval for checking mailbox status.
   * @param {function} signalCallback Function to invoke when the timer interval expires.
   * @memberof IOTMailbox
   */
  constructor(signalInterval = 500, signalCallback) {
    this.signalInterval = signalInterval;
    this.signalCallback = signalCallback;
    this.intervalID = null;
    this.lastLightLevel = 0;
  }

  /**
   * Start monitoring of the mailbox and invoke the caller specified callback
   * function when the interval expires.
   * @memberof IOTMailbox
   */
  startMonitoring = () => {
    console.log(`Starting monitoring of mailbox...`);
    this.intervalID = window.setInterval(this.signalStateChange, this.signalInterval);
  }

  /**
   * Stop monitoring the mailbox status
   * @memberof IOTMailbox
   */
  stopMonitoring = () => {
    if (this.intervalID === null) return;
    window.clearInterval(this.intervalID);
    this.intervalID = null;
    console.log(`Mailbox monitoring stopped...`);
  }

  /**
   * Pass the current light level inside the mailbox to the users callback
   * function. The positive light levels indicate the door is open while 
   * negative levels indicate it is closed. Depending on the sampling interval 
   * the mailbox door could be in any postion from fully closed to fully open. 
   * This means the light level varies from interval-to-interval.
   * @memberof IOTMailbox
   */
  signalStateChange = () => {
    const lightLevel = this.lastLightLevel >= 0 
      ? Math.random().toFixed(2) * -1 
      : Math.random().toFixed(2);
    console.log(`Mailbox state changed - lightLevel: ${lightLevel}`);
    this.signalCallback(this.lightLevel);
    this.lastLightLevel = lightLevel;
  }
};
```

## User Stories

-   [ ] User can see a web page containing a control panel containing three
buttons - 'Start Monitoring', 'Stop Monitoring', and 'Reset'.
-   [ ] User can see a notification panel where the mailbox status will be posted.
-   [ ] User can see a scrollable log panel where execution details describing 
the apps operation and interface with the IOTMailbox instance will be posted.
-   [ ] User can click the 'Start Monitoring' button to begin receiving state
notifications from the mailbox.
-   [ ] User can see a message added to the log panel when monitoring starts.
-   [ ] User can see a message added to the log panel for light level passed
through the callback function. This should include the numerical light level
and whether the door is open or closed.
-   [ ] User can see a message added to the notification panel when the door has
been opened.
-   [ ] User can click the 'Stop Monitoring' button to stop receiving state
notifications from the mailbox. 
-   [ ] User can see a message added to the log panel when monitoring stops.

## Bonus features

-   [ ] User can see the 'Start Monitoring' button disabled until monitoring is
stopped.
-   [ ] User can see the 'Stop Monitoring' button disabled until monitoring is
started.
-   [ ] User can see an field in the control panel allowing the length of the
monitoring interval to be specified. 
-   [ ] User can see a message added to the notification panel if the door is
left open.
-   [ ] User can hear an audible alert when the door is opened.

## Useful links and resources

- [Snail Mail (Wikipedia)](https://en.wikipedia.org/wiki/Snail_mail)
- [Internet of Things (Wikipedia)](https://en.wikipedia.org/wiki/Internet_of_things)
- [IOT Mailbox: An Introduction](https://iotexpert.com/2018/08/13/iot-mailbox-an-introduction/)
- [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
- [window.setInterval (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## Example projects

N/a
