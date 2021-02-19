// Pagination & Filtering Project

// Elements

const header = document.querySelector('header');
const page = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

// Variables

let searchResults = [];

// Functions

// Getters

// The 'itemsPerPage' Function Returns The Number Of Students That Should Be Displayed On Each Page.
// Change The Default Value (9) To Display A Different Number Of Students On Each Page!

const itemsPerPage = () => 9;

// The 'getPaginationButtons' Function Selects & Returns All The Pagination Buttons

const getPaginationButtons = () => document.querySelectorAll('.link-list button');

// The 'getSearchBox' Function Selects & Returns The Search Box

const getSearchBox = () => document.querySelector('#search');

// The 'getSearchButton' Function Selects & Returns The Search Button

const getSearchButton = () => document.querySelector('.student-search button');

// The 'noResultsDiv' Function Selects & Returns The 'No Results' Section

const noResultsDiv = () => document.querySelector('.no-results');

// The 'noResultsH3' Function Selects & Returns The 'No Results' Message

const noResultsH3 = () => noResultsDiv().firstElementChild;

// Setters

// The 'setActiveButton' Function Determines Which Of The Pagination Buttons Is An Active Button

const setActiveButton = (pageNum) => {

   for (const button of getPaginationButtons())

      if (parseInt(button.textContent) === pageNum)
         button.className = 'active';

      else
         button.className = '';   

}

// Functions To Create HTML Elements

// The 'createElement' Function Returns A Newly Created Element With The Provided Tag Name & Props Object

const createElement = (tagName, props) => {

   const element = document.createElement(tagName);

   const keys = Object.keys(props);
   const values = Object.values(props);

   for (let i = 0; i < keys.length; i ++)
      element[keys[i]] = values[i];

   return element;   

}

// The 'createSearchBar' Function Appends A Search Bar To The Header

const createSearchBar = () => {

   const label = createElement('label', { htmlFor: 'search', className: 'student-search' });
   const input = createElement('input', { id: 'search', placeholder: 'Search By Name ...' });
   const button = createElement('button', { type: 'button' });
   const img = createElement('img', { src: 'img/icn-search.svg', alt: 'Search Icon' });

   button.appendChild(img);
   label.append(input, button);
   header.appendChild(label);

}

// The 'getStudentItem' Function Returns An Element That Represents A Student (LI)

const getStudentItem = ({ name, email, image, date }) => {

   // The 'getStudentDetails' Function Returns A Div That Contains Student Details (Image, Name & Email)

   const getStudentDetails = (name, email, image) => {

      const div = createElement('div', { className: 'student-details' });
      const img = createElement('img', { className: 'avatar', src: image, alt: 'Profile Picture'});
      const h3 = createElement('h3', { textContent: name });
      const span = createElement('span', { className: 'email', textContent: email });

      div.append(img, h3, span);
      return div;

   }

   // The 'getJoiningDate' Function Returns A Div That Contains The Joining Date Of A Student

   const getJoiningDate = (date) => {

      const div = createElement('div', { className: 'joined-details' });
      const span = createElement('span', { className: 'date', textContent: 'Joined ' + date });

      div.appendChild(span);
      return div;

   }

   // Actually Create & Return The LI

   const li = createElement('li', { className: 'student-item cf' });
   const studentDetails = getStudentDetails(name, email, image);
   const joiningDate = getJoiningDate(date);

   li.append(studentDetails, joiningDate);
   return li;

}

// The 'noResultsMessage' Function Generates The 'No Results' Section

const noResultsMessage = () => {

   // The 'getIcon' Function Creates & Returns An Icon To Display In The 'No Results' Section 

   const getIcon = () => {

      const div = createElement('div', { className: 'sad-icon' });
      const i = createElement('i', { className: 'far fa-sad-cry' });

      div.appendChild(i);
      return div;

   }

   // Actually Create The 'No Results' Section

   const div = createElement('div', { className: 'no-results' });
   const h3 = document.createElement('h3');

   const icon = getIcon();
   const h4 = createElement('h4', { textContent: 'Please Try Searching Again!' });

   // Don't Display The 'No Results' Div In The Initial Load Of The Web Page

   div.style.display = 'none';

   // Compose The 'No Results' Div, Append It To The Page & Return It

   div.append(h3, icon, h4);
   page.appendChild(div);
   return div;

}

// Main Functions

// The 'showPage' Function Determines Which Students Should Be Displayed On The Page, Based On The Provided Page Number & List

const showPage = (pageNum, list) => {

   // The 'getStudentDetails' Function Extracts Student Details From The Provided List

   const getStudentDetails = (student) => {

      const name = student.name.first + ' ' + student.name.last;
      const email = student.email;
      const image = student.picture.large;
      const date = student.registered.date;

      return { name, email, image, date };

   }

   // Clear The List Of Students From The Web Page

   studentList.innerHTML = '';

   // Show Students From Index 'low'

   const low = (pageNum * itemsPerPage()) - itemsPerPage();

   // Show Students Until Index 'high'

   const high = pageNum * itemsPerPage();

   /* Examples:
   
      1. If The Given Page Number Is 1 & We Want To Display 9 Students On Each Page, Show Students From Index 0 To 8.
      2. If The Given Page Number Is 2 & We Want To Display 9 Students On Each Page, Show Students From Index 9 To 18, Etc.. */

   for (let i = low; i < high; i ++) {

      /* The 'high' Variable Can Hold A Value That Is Bigger Than The Length Of The List.
         For Example, If 'pageNum' Is 5 & The 'itemsPerPage' Function Returns 9, Then The Value Of The 'high' Variable Will Be 45.
         But If The List Parameter Is Actually The Original 'data' Array (From The 'data.js' File), Then Its Length Is Only 42.
         Therefore, If There Is No Defined Value In The Current Index - End The Loop. */

      if (!(list[i]))
         break;

      // Actually Create Student Items & Append Them To The UL (Which Is Represented By The 'studentList' Variable)

      const details = getStudentDetails(list[i]);
      const studentItem = getStudentItem(details);
      studentList.appendChild(studentItem);

   }

}

// The 'addPagination' Function Adds Pagination Buttons To The Web Page

const addPagination = (list) => {

   // Clear All Of The Pagination Buttons From The Web Page

   linkList.innerHTML = '';

   /* Calculate The Number Of Needed Pagination Links.
   Take The Total Amount Of Students And Divide It By The Maximum Number Of Items That You Would Like To Display On A Page.
   By Default, We Won't Display More Than 9 Students On Each Page.
   Finally, Use Math.Ceil To Deal With Decimal Fractions.
   For Example, If There Are 42 Students Then We'll Create 5 Pagination Links.
   The First 4 Pages Will Display 9 Students Each, And The Fifth Page Will Display The Remaining 6 Students. */

   const numOfPages = Math.ceil(list.length / itemsPerPage());

   // Create The Buttons & Append Them To The 'linkList' Variable

   for (let i = 1; i <= numOfPages; i ++) {

      const li = document.createElement('li');
      const button = createElement('button', { type: 'button', textContent: i });
   
      li.appendChild(button);
      linkList.appendChild(li);

   }

}

// The 'searchTerm' Function Is Responsible For Displaying Specific Students Based On User Input

const searchTerm = (term) => {

   // First Of All, Clear The Array With Each Function Call

   searchResults = [];

   // Use 'toUpperCase' Function In Order To Ignore Case Consideration When Comparing Between Strings 

   term = term.toUpperCase();

   for (let i = 0; i < data.length; i ++) {

      const studentName = (data[i].name.first + ' ' + data[i].name.last).toUpperCase();
      const studentEmail = data[i].email.toUpperCase();
      const joiningDate = data[i].registered.date;

      // Search For A Student By Name, Email & Even Joining Date!

      if (studentName.includes(term) || studentEmail.includes(term) || joiningDate.includes(term))
         searchResults.push(data[i]);   

   }

   // Load The First Page Of Students That Match The User Input

   loadPage(1, searchResults);

}

// Auxiliary Functions

// addBoxListener

const addBoxListener = () => getSearchBox().addEventListener('keyup', () => searchTerm(getSearchBox().value));

// addButtonListeners

const addButtonListeners = () => {

   // A Function To Add Event Listeners To The Search Button

   const addSearchButtonListener = () => {

      const searchButton = getSearchButton();

      // Add Click Event Listener

      searchButton.addEventListener('click', () => {

         // Get The Term To Search From The Search Box & Call The 'searchTerm' Function

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

         // If A Button Was Clicked, See Which Page Is Requested & Set The Relevant Button As Active

         const requestedPage = i + 1;
         setActiveButton(requestedPage);

         // If The Search Box Is Not Empty - Filter The 'data' Array Based On The User Input

         if (searchResults.length > 0)
            showPage(requestedPage, searchResults);

         // In Any Other Case Show All Students   
         
         else
            showPage(requestedPage, data); 

      });

   }

}

// printNoResultsMessage

const printNoResultsMessage = (list) => {

   // If There Are Students To Display - Don't Show The 'No Results' Div

   if (list.length > 0)
      noResultsDiv().style.display = 'none';

   // In Any Other Case Display The Div & Show An Informative 'No Results' Message   

   else {

      const term = getSearchBox().value;

      noResultsDiv().style.display = '';
      noResultsH3().innerHTML = 'No Results Found For <strong>' + term + '</strong>.';

   }
      
}

// Activation Functions

// loadPage

const loadPage = (pageNum, list) => {

   addPagination(list);
   addButtonListeners();
   setActiveButton(pageNum);
   showPage(pageNum, list);
   printNoResultsMessage(list);

}

// Run

const run = (list) => {

   createSearchBar();
   noResultsMessage();
   loadPage(1, list);
   addBoxListener();

}

// Run The Script

run(data);