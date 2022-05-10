import getElement from './getElement.js';

// picking elements that will take in action and effects
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
// converting the icons into an array using spread operator
const btns = [...document.querySelectorAll('.icon')];

const displayPerson = (person) => {
  // get image from the server Person Object and display it
  img.src = person.image;
  // change text
  title.textContent = `My Name is `;
  // change text of person name from the server
  value.textContent = person.name;
  // iterate over the icon buttons and remove the active class
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  // adding an active class to the initial icon
  btns[0].classList.add('active');
  // iterating over the icons button
  btns.forEach((btn) => {
    // getting the dataset attribute value from the HTML
    const label = btn.dataset.label;
    // adding an event on each buttons
    btn.addEventListener('click', () => {
      // changing the title above depending on the icon clicked
      title.textContent = `My ${label} is`;
      // changing text of person name via the selected data label
      value.textContent = person[label];
      // iterate over the icon buttons and remove the active class
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      // adding the active class to each clicked Icon button
      btn.classList.add('active');
    });
  });
};

export default displayPerson;
