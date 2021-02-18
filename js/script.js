// Pagination & Filtering 

// Elements

const header = document.querySelector('header');
const page = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

// Variables

let searchResults = [];

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

// getStudentItem

const getStudentItem = ({ name, email, image, date }) => {

   // Get Student Details

   const getStudentDetails = (name, email, image) => {

      const div = createElement('div', { className: 'student-details' });
      const img = createElement('img', { className: 'avatar', src: image, alt: 'Profile Picture'});
      const h3 = createElement('h3', { textContent: name });
      const span = createElement('span', { className: 'email', textContent: email });

      div.append(img, h3, span);
      return div;

   }

   // Get Joining Date

   const getJoiningDate = (date) => {

      const div = createElement('div', { className: 'joined-details' });
      const span = createElement('span', { className: 'date', textContent: 'Joined ' + date });

      div.appendChild(span);
      return div;

   }

   // Create & Return A Student Item

   const li = createElement('li', { className: 'student-item cf' });
   const studentDetails = getStudentDetails(name, email, image);
   const joiningDate = getJoiningDate(date);

   li.append(studentDetails, joiningDate);
   return li;

}

// itemsPerPage

const itemsPerPage = () => 9;

// getPaginationButtons

const getPaginationButtons = () => document.querySelectorAll('.link-list button');

// getSearchBox

const getSearchBox = () => document.querySelector('#search');

// getSearchButton

const getSearchButton = () => document.querySelector('.student-search button');

// showPage

const showPage = (pageNum, list) => {

   // getStudentDetails

   const getStudentDetails = (student) => {

      const name = student.name.first + ' ' + student.name.last;
      const email = student.email;
      const image = student.picture.large;
      const date = student.registered.date;

      return { name, email, image, date };

   }

   // Clear The List Of Students

   studentList.innerHTML = '';

   const low = (pageNum * itemsPerPage()) - itemsPerPage();
   const high = pageNum * itemsPerPage();

   for (let i = low; i < list.length; i ++) {

      if (i < high) {

         const details = getStudentDetails(list[i]);
         const studentItem = getStudentItem(details);
         studentList.appendChild(studentItem);

      }

   }

}

// addPagination

const addPagination = (list) => {

   linkList.innerHTML = '';

   const numOfPages = Math.ceil(list.length / itemsPerPage());

   for (let i = 1; i <= numOfPages; i ++) {

      const li = document.createElement('li');
      const button = createElement('button', { type: 'button', textContent: i });
   
      li.appendChild(button);
      linkList.appendChild(li);

   }

}

// Set The Active Button

const setActiveButton = (requestedPage) => {

   for (const button of getPaginationButtons())

      if (parseInt(button.textContent) === requestedPage)
         button.className = 'active';

      else
         button.className = '';   

}

// searchTerm

const searchTerm = (term) => {

   searchResults = [];
   term = term.toUpperCase();

   for (let i = 0; i < data.length; i ++) {

      const studentName = (data[i].name.first + ' ' + data[i].name.last).toUpperCase();
      const studentEmail = data[i].email.toUpperCase();
      const joiningDate = data[i].registered.date;

      if (studentName.indexOf(term) > -1 || studentEmail.indexOf(term) > -1 || joiningDate.indexOf(term) > -1)
         searchResults.push(data[i]);   

   }

   loadPage(1, searchResults);

}

// addBoxListener

const addBoxListener = () => getSearchBox().addEventListener('keyup', () => searchTerm(getSearchBox().value));

// addButtonListeners

const addButtonListeners = () => {

   // A Function To Add Event Listeners To The Search Button

   const addSearchButtonListener = () => {

      const searchButton = getSearchButton();

      // Add Click Event Listener

      searchButton.addEventListener('click', () => {

         // Get The Term To Search From The Search Box

         const term = getSearchBox().value;
         searchTerm(term);

      });

   }

   // Add An Event Listener To The Search Button

   addSearchButtonListener();

   // Add An Event Listener To Each Pagination Button

   const paginationButtons = getPaginationButtons();

   for (let i = 0; i < paginationButtons.length; i ++) {

      paginationButtons[i].addEventListener('click', () => {

         const requestedPage = i + 1;
         setActiveButton(requestedPage);

         if (searchResults.length > 0)
            showPage(requestedPage, searchResults);
         
         else
            showPage(requestedPage, data); 

      });

   }

}

// noResultsMessage

const noResultsMessage = (message) => {

   // styleElement

   const styleElement = (element, styles) => {

      const keys = Object.keys(styles);
      const values = Object.values(styles);

      for (let i = 0; i < keys.length; i ++)
         element.style[keys[i]] = values[i];

   }

   // getSadIcon

   const getSadIcon = () => {

      const div = createElement('div', { className: 'sad-icon' });
      const i = createElement('i', { className: 'far fa-sad-cry' });

      styleElement(i, { fontSize: '10em', color: '#A9CBEF' });

      div.appendChild(i);
      return div;

   }

   const div = createElement('div', { className: 'no-results' });
   const h3 = createElement('h3', { textContent: message });
   const sadIcon = getSadIcon();
   const h4 = createElement('h4', { textContent: 'Please Try Searching Again!' });

   styleElement(div, { margin: '0 auto', textTransform: 'uppercase', display: 'none',
                       minHeight: '400px', flexDirection: 'column', justifyContent: 'space-between',
                       textAlign: 'center' });


   div.append(h3, sadIcon, h4);

   page.appendChild(div);
   return div;

}

// noResultsDiv

const noResultsDiv = () => document.querySelector('.no-results');

// noResultsH3

const noResultsH3 = () => noResultsDiv().firstElementChild;

// printNoResultsMessage

const printNoResultsMessage = (list) => {

   if (list.length > 0)
      noResultsDiv().style.display = 'none';

   else {

      const term = getSearchBox().value;

      noResultsDiv().style.display = 'flex';
      noResultsH3().innerHTML = 'No Results Found For <strong>' + term + '</strong>.';

   }
      

}

// loadPage

const loadPage = (pageNum, list) => {

   addPagination(list);
   addButtonListeners();
   setActiveButton(pageNum);
   showPage(pageNum, list);
   printNoResultsMessage(list);

}

// Activation Function

const run = (list) => {

   createSearchBar();
   noResultsMessage('No Results Found');
   loadPage(1, list);
   addBoxListener();

}

// Run The Script

run(data);