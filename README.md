# Book Search Demo

Android app that leverages the [OpenLibrary API](https://openlibrary.org/developers/api) to search books and display cover images. It also allows you to recommend books to friends. See the [Book Search Tutorial](http://guides.codepath.com/android/Book-Search-Tutorial) on our cliffnotes for a step-by-step tutorial.

The app is composed of two screens. The first screen displays a list of books, in which, each book is described by its title, author and cover photo. After a user selects a book from the list, a second screen appears displaying additional details about the book, including the publisher and no. of pages.

**Book List**

![Imgur](http://i.imgur.com/sSINs2zl.png)

**Book Details**

![Imgur](http://i.imgur.com/y9a4AtQl.png)

## Overview

The app does the following:

1. Search a list of books using the [OpenLibrary Search API](https://openlibrary.org/dev/docs/api/search)
2. Display the list of books with their cover images and details
3. Replace ActionBar with Toolbar
4. Use SearchView to search for books with a title
5. Show ProgressBar before each network request
6. Add a detail view to display more information about the selected book from the list
7. Use a share intent to recommend a book to friends

To achieve this, there are five different components in this app:

1. `BookClient` - Responsible for executing the API requests and retrieving the JSON
2. `Book` - Model object responsible for encapsulating the attributes for each individual book
3. `BookAdapter` - Responsible for mapping each `Book` to a particular view layout
4. `BookListActivity` - Responsible for fetching and deserializing the data, configuring the adapter and providing a search interface
5. `BookDetailActivity` - Responsible for providing book detail view and share intent.

See the [Book Search Tutorial](http://guides.codepath.com/android/Book-Search-Tutorial) on our cliffnotes for a step-by-step tutorial.

## Libraries

This app leverages two third-party libraries:

 * [Android AsyncHTTPClient](http://loopj.com/android-async-http/) - For asynchronous network requests
 * [Picasso](http://square.github.io/picasso/) - For remote image loading

