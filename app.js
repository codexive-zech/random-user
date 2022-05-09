// importing the function that does get each selected element if it exist else it displays error msg
import getElement from './utils/getElement.js';
import getUser from './utils/getUsers.js';

// picking elements that will take in action and effects
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
// converting the icons into an array using spread operator
const iconBtn = [...document.querySelectorAll('.icon')];

const showUser = async () => {
  //   invoking the get User func expr
  const person = await getUser();
  console.log(person);
};

// contents is displayed immediately the window loads
window.addEventListener('DOMContentLoaded', showUser);
// display user when the button is clicked
btn.addEventListener('click', showUser);
