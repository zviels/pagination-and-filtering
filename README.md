# Pagination & Filtering

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). In this project I used a common web development technique called "pagination" to enhance the usability of a web page.

I was given a file that contains information about forty-two students, including names, email addresses and pictures. I then used my JavaScript skills to -

- Display the first nine students on the page.
- Add pagination buttons that the user can click on to display different pages of students.

The app works with a list of any number of students, not just with the supplied array of forty-two students.

## Table of Contents

- [Preview](https://github.com/zviels/pagination-and-filtering/tree/gh-pages#preview)
- [Quick Start](https://github.com/zviels/pagination-and-filtering/tree/gh-pages#quick-start)
- [Overview](https://github.com/zviels/pagination-and-filtering/tree/gh-pages#overview)
- [Built With](https://github.com/zviels/pagination-and-filtering/tree/gh-pages#built-with)
- [Thanks](https://github.com/zviels/pagination-and-filtering/tree/gh-pages#thanks)

## Preview

<a href="https://zviels.github.io/pagination-and-filtering">
  <img src="https://i.imgur.com/aJfNWcj.gif" alt="App Preview" width="100%">
</a>

## Quick Start

To view the app -

- You can [download the ZIP file](https://github.com/zviels/pagination-and-filtering/archive/refs/heads/main.zip), extract it and open `index.html`.
- Alternatively, you can watch the app online [here](https://zviels.github.io/pagination-and-filtering).

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- Additional features I chose to implement for the app.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- CSS Selectors Quickstart <img src="https://img.shields.io/badge/-CSS%20Course-3659a2" alt="CSS Course">
- JavaScript and the DOM <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- DOM Scripting By Example <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

I also learned how to structure my code, debug JS in the browser, write pseudocode and translate it to a valid, working code.

### Project Requirements

#### External Vanilla JavaScript

- I was not allowed to use jQuery or some other library, plugin or borrowed code snippet.
- I had to link all JavaScript code from external files.
- I had to create the markup for the student list and pagination buttons dynamically, with JavaScript.

To exceed expectations -

- I had to use JavaScript to append HTML for a search bar.
- In addition, the search bar had to match the layout of the example in the mockup file I received, or to have custom styling.

#### Pagination Buttons

- The pagination buttons had to display the correct page.
- Clicking between or outside of pagination buttons shouldn't have triggered the click event.
- The `active` class name had to be added to the most recently clicked pagination button. Furthermore, there should have been only one active button at any given time.
- Project had to have the correct number of pagination buttons, and they should have been numbered correctly. For example - if there were forty-two students, there should have been five pagination buttons, numbering 1 through 5.

To exceed expectations, the number of pages and pagination buttons had to be changed based on how many search results are returned. For example - if nine or fewer results were returned, zero or one pagination buttons should have been displayed. If twenty-two search results were returned, three pagination buttons should have been displayed.

#### Paging

- The first nine students from the array of objects in the `js/data.js` file should have been displayed when the page was first loaded.
- Clicking on a pagination button should have displayed the correct number of students. For example - clicking on button number `1` should have shown students 1 to 9, clicking on button number `2` should have shown students 10 to 18, etc.

To exceed expectations - 

- I had to display a "No Results" message when a search yields zero results. I also had to remove or hide this message when students are displayed on the page again.
- After a search, pages had to display only students that match the search criteria. The pages also had to display the correct number of students. For example - if twenty-two search results were returned, the third and final page should have displayed only four students.

#### Code Quality

To meet the project requirements, I also had to add comments to the `js/script.js` file. In addition, uncaught errors shouldn't have appeared in the Chrome DevTools console when using the app in Chrome. 

### Additional Features

These are features I chose to implement for the project, even though I didn't have to. The additional features may extend the functionality of the app, improve the user experience or beautify the user interface.

As of this moment I have implemented three additional features for the app.

- You don't have to click the search button to get the results back. You will get the search results instantly, while typing in the search bar.
- You can search for a student not only by name, but also by email address or joining date. 
- I also designed a fancy "No Results" message, that clearly shows which search term has no results. The message also includes a sad emoji and text that encourages the user to try searching again. To implement this feature, I had to work with an existing CSS file. I used [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [FontAwesome](https://fontawesome.com) to achieve this result.

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

This project received the **"Exceeds Expectations"** rating.

:100:

## Built With

- HTML
- CSS
- JavaScript

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://static.teamtreehouse.com/assets/marketing/opengraph/logo_twitter-cd0ecb90408499f45a2191805f54362981da5a69ddcfaa6ec93556d64e289036.png" alt="Treehouse Logo" width="100%" height="50%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter files for this project -

- `index.html`
- `styles.css`
- `data.js`

In addition, a huge thank you to everyone who reviewed the project! :grinning:
