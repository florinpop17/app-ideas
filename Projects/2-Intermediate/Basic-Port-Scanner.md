# Basic Port Scanner

**Tier:** 2-Intermediate

Create a Basic TCP Port scanner which will identify open ports for a given IP Address and identify the service running on them.

## User Stories

-   [ ] User can scan a chosen IP Address to reveal open ports on that specific IP Address.
-   [ ] The scanner should be able to retrieve service information on the open ports (also known as banner grabbing).
-   [ ] The output should look like the table below:

| Ports | Service | Version |
|:---|:---|:---|
| 22/TCP | SSH | OpenSSH 7.4 |
| 80/TCP | HTTP | Nginx 1.14.0 |

## Bonus features

-   [ ] Add hostname resolver for single IP scanning (e.g: example.com instead of 192.168.0.1).
-   [ ] Add subnet scan feature to scan an entire subnet of IP Address with CIDR notation (192.168.0.1/24).
-   [ ] Add multi-threading/multi-processes feature to speed up the scanning process.
-   [ ] Add UDP port scanning feature on top of TCP.

## Useful links and resources

[Nmap - TCP Connect Scan](https://nmap.org/book/scan-methods-connect-scan.html)
[Nmap - UDP Scan](https://nmap.org/book/scan-methods-udp-scan.html)
[Python For Begginers](https://www.pythonforbeginners.com/code-snippets-source-code/port-scanner-in-python)

## Example projects

[Ripscan](https://github.com/b4keSn4ke/ripscan)
