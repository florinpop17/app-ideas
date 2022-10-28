# ADS-B Decoder

**Tier:** 3-Advanced

All modern commercial aircraft transmit Automatic Dependent Surveillance-Broadcast (ADS-B) messages multiple times a second for the duration. These messages contain multiple different types of messages along with data about the flight and the current conditions of the flight.
This project idea is to build a "simple" decoder to find out what each message contains and data from some of the messages! This is an advanced project, even when building a simple decoder due to how complex the ADS-B system is. You can take this project a lot further to put your skills to the test! Resources for learning more about ADS-B or ADS-B Datasets can be found in the useful links and resources section.

## User Stories

-   [ ] Convert the original message from hexadecimal to a more useful binary format
-   [ ] Filter out any message that is not 112 bits long
-   [ ] Split the message into 5 sections corresponding to the sections of an ADS-B message as follows:
        Downlink Format (DF)
        Transponder Capability (CA)
        ICAO Aircraft Address (ICAO)
        Data Payload
        Parity 
-   [ ] Determine the type of each message
-   [ ] Determine the call sign of the aircraft

## Bonus features

-   [ ] Determine the altitude and/or speed of the aircraft
-   [ ] Sort the messages by aircraft
-   [ ] Determine the current status of the aircraft
-   [ ] Check for errors in the message using the parity section of the message

## Useful links and resources

-   [1090MHz Riddle - A Guide for Decoding ADS-B Signals](https://mode-s.org/decode/)
-   [Sample Data](https://www.adsbexchange.com/data-samples/)

## Example projects

-   [Python ADS-B Decoder](https://github.com/junzis/pyModeS)
