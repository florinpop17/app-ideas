# QRCode Badge Generator

**Tier:** 2-Intermediate

At some point in your career you will probably find yourself involved helping
to coordinate a company-sponsored event or a local technical Meetup. It's not
uncommon in these types of gatherings for attendees to want to exchange contact
information between themselves. 

But how to do that? Attendees could always exchange business cards or write
down each others email or social media account names, but that can be slow and
error prone. Wouldn't it be nice to be able to scan a each others badges to
capture this type of information quickly and more dependably? 

If you answered 'Yes!" to this question then QRCode Badge Generator is an
app you will be interested in creating. The objective of this application is
to collect a meeting attendee's name, email address, Twitter, and GitHub 
account names and print a name badge with a QRcode that can be scanned using
a smartphone.

### Requirements & Constraints

- For this app you'll want to use the NPM package 
[QRCode Generator](https://www.npmjs.com/package/qrcode-generator) to encode
the information you collect from the attendee in a QR code.

- To test your implementation you'll need to download a QR code reader onto
your smartphone or tablet. There are many such readers that are free of charge.
Check the app store for your device to find the one that best suites your needs.

## User Stories

-   [ ] User can see an input panel containing input fields for the attendee
name, email address, Twitter account name, GitHub account name, and 'Cancel'
and 'Create' buttons.
-   [ ] User can enter data into these input fields. Note that attendee name
and email address are required, but the Twitter and GitHub account names are
optional fields.
-   [ ] User can click the 'Cancel' button to clear all input fields as well as
the badge panel (see below) if it has been created.
-   [ ] User can click the 'Create' button to generated an image of the 
attendees name badge.
-   [ ] User can see an error message if any of the following are true:
    - Required fields are empty
    - A first name and last name have not been entered
    - Email input field isn't a properly formatted email address
    - Twitter account name doesn't start with '@'
-   [ ] User can see an badge panel displayed on screen containing this 
information, plus a QR code encoded with this information.

## Bonus features

-   [ ] User can see a 'Print' button below the badge panel.
-   [ ] User can see the 'Print' button enabled only after the input fields
have been validated and the badge is displayed in the badge panel.
-   [ ] User can make corrections to the input fields and click 'Create' to
update the contents of the badge panel.
-   [ ] User can click the 'Print' button to reproduce the badge panel on a
label or hardcopy.
-   [ ] User can see the '@' symbol automatically prepended to the Twitter
account name so it doesn't have to be manually entered.

## Useful links and resources

- [QR code (Wikipedia)](https://en.wikipedia.org/wiki/QR_code)
- [QRCode Generator](https://www.npmjs.com/package/qrcode-generator)

## Example projects

[QRCode Generator](https://kazuhikoarase.github.io/qrcode-generator/js/demo/)
