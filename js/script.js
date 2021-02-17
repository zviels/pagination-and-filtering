// Pagination & Filtering 

// Elements

const header = document.querySelector('header');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

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

// showPage

// To Do: Only Nine Students Should Be Displayed On Each Page

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

const addPagination = () => {

   const numOfPages = Math.ceil(data.length / itemsPerPage());

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

// addButtonListeners

const addButtonListeners = () => {

   const paginationButtons = getPaginationButtons();

   // Add An Event Listener To Each Pagination Button

   for (let i = 0; i < paginationButtons.length; i ++) {

      paginationButtons[i].addEventListener('click', () => {

         const requestedPage = i + 1;
         setActiveButton(requestedPage);
         showPage(requestedPage, data);

      });

   }

}

// Activation Function

const run = (pageNum, list) => {

   createSearchBar();
   addPagination();
   addButtonListeners();
   showPage(pageNum, list);
   setActiveButton(pageNum);

}

// Run The Script

run(1, data);