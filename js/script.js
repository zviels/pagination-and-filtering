// Pagination & Filtering 

// Elements

const header = document.querySelector('header');

// createElement

const createElement = (tagName, props) => {

   const element = document.createElement(tagName);

   const keys = Object.keys(props);
   const values = Object.values(props);

   for (let i = 0; i < keys.length; i ++)
      element[keys[i]] = values[i];

   return element;   

}

// createSearchBar

const createSearchBar = () => {

   const label = createElement('label', { htmlFor: 'search', className: 'student-search' });
   const input = createElement('input', { id: 'search', placeholder: 'Search By Name ...' });
   const button = createElement('button', { type: 'button' });
   const img = createElement('img', { src: 'img/icn-search.svg', alt: 'Search Icon' });

   button.appendChild(img);
   label.append(input, button);
   header.appendChild(label);

}

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Run The Script

createSearchBar();