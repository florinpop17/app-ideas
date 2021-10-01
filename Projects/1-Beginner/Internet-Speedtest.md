# Internet Speedtest

**Tier:** 1-Beginner

Command line interface for testing internet bandwidth + Pyinstaller to convert it to an .exe file.

### Constraints

-   Latency reported by this tool should not be relied on as a value indicative of ICMP style latency. **It is a relative value** used for determining the lowest latency server for performing the actual speed test against.

## User Stories

-   [ ] User can get `upload`, `download`, `ping` values.
-   [ ] User can bind a specific source.

## Bonus features

-   [ ] User can perform using a single connection instead of multiple. This simulates a typical file transfer.
-   [ ] User can set its own mini server.

## Useful links and resources

-   [Speedtest-cli API](https://github.com/sivel/speedtest-cli)
-   [Speedtest-cli Wiki](https://github.com/sivel/speedtest-cli/wiki)
-   [Pyinstaller Package](https://www.pyinstaller.org/)


## Example projects

[Daniela Lima's speedtest app](https://github.com/mrslima/Example_Projects/blob/main/Internet-Speedtest.py)
