# Hello

**Tier:** 1-Beginner

It is a given that applications must provide users with the functionality
necessary to accomplish some task or goal. The effectiveness of app functionality
is the first determinate of how users perceive the apps they use. However, it
is not the only thing that influences user satisfaction.

The User Interface and User Experience (UI/UX) features developers build into
apps have at least an equal amount of influence on users perception of an app.
It may be an oversimplification, but UI/UX is largely (but not wholly)
concerned with an apps "form". Personalization is an aspect of UX that tailors
characteristics and actions to
the individual user. Personalizing app functionality in this manner works to
make the app easier and more pleasing to use.

The objective of the Hello app is to leverage geolocation to obtain the users
country so it can then generate a customized greeting in the users native
language.

### Constraints

-   Developers should use the [IP-API](http://ip-api.com/docs/api:json) service
    to obtain the users IP.
-   Developers should use the
    [Fourtonfish](https://www.fourtonfish.com/hellosalut/hello/) service to
    obtain the greeting in the users native language by passing the users IP.
-   Developers must use a HTML entities decoding to decode the hello message.

## User Stories

-   [ ] User can see a mock login panel containing a user name text input field,
        a password text input field, and 'Login' and 'Logout' buttons.
-   [ ] User can enter a mock login name into the User Name field.
-   [ ] User can enter a mock password into the Password field. Input should
        be masked so the user see's asterisks (`*`) for each character that is entered
        rather than the plaintext password.
-   [ ] User can click the 'Login' button to perform a mock login.
-   [ ] User can see a message if either or both of the input fields are empty
        and the border color of the field(s) in error should be changed to red.
-   [ ] User can see a login acknowledgement message in the format:
        `<hello-in-native-language> <user-name> you have successfully logged in!`
-   [ ] User can click the 'Logout' button to clear the text input fields and
        any previous messages.
-   [ ] User can see a new message when successfully logged out in the format:
        `Have a great day <user-name>!`

## Bonus features

-   [ ] User can see an additional text input field for a language code which
        will be used to override the IP obtained through geolocation. Hint:
        this is a great feature for testing your app.
-   [ ] User can see additional geolocation information after logging on that
        includes at least the local IP address, city, region, country name, zip code,
        longitude, latitude, and timezone.

## Useful links and resources

-   [Form Follows Function (Wikipedia)](https://en.wikipedia.org/wiki/Form_follows_function)
-   [Personalization (Wikipedia)](https://en.wikipedia.org/wiki/Personalization)
-   [Fourtonfish](https://www.fourtonfish.com/hellosalut/hello/)
-   [IP-API](http://ip-api.com/docs/api:json)

## Example projects

[Fourtonfish Hello World](https://fourtonfish.com/hellosalut/helloworld/)
