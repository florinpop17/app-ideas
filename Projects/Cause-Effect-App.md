# CauseEffect

**Tier:** 1-Beginner

Patterns are integral to software engineering and represent potentially
reusable components in program logic. However, patterns aren't used only
for program logic, they are exist in other domains such as DevOps, user
support, and the user interface.

A common user interface pattern is to summarize data in one section of a page
that consists of some type of list (like text, images, or icons) that describes
or categorizes a set of data. When a list item is clicked, the detailed data
behind it is displayed in an adjacent pane on the page.

For example, on a real estate site clicking an address in a list of properties
for sale displays the details about the property in another part of the
page.

This challenge requires that the developer implementing it follow these
constraints:

-   You are responsible for creating your own test data. Use a hardcoded
    Javascript object to define your test data (see below).
-   Use only native HTML/CSS/Javascript in your first version of this app
-   You may use other packages or libraries when implementing subsequent
    versions.

## User Stories

-   [ ] User can see a list of person names arranged vertically in a summary
        pane on the page.
-   [ ] User can click on a name in the list to update an adjacent pane on the
        page with that individuals full name, address, telephone number, and
        birthday.
-   [ ] User can click on another name in the list to refresh the detail pane
        with that individuals information.

## Bonus features

-   [ ] User can see the person name in the summary pane highlighted when the
        cursor is hovered over it.
-   [ ] User can see the person name in the summary pane highlighted
        using a selection effect (color, size, etc.) when it is clicked. This is a
        different effect from the hover effect
-   [ ] User can see the selection effect removed from a name in the summary
        list when a new name is clicked.

## Useful links and resources

-   [DOM Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)
-   Consider defining your test data in a JavaScript object having a format
    such as this:

```
const people = [
  {name: "...", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
  .
  .
  .
  {name: "...", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."}
];
```

## Example projects

Checkout the interaction between the Navigation items on the left hand side
of the page and the main body of the page on the [Javascript MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
