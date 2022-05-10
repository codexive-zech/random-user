// importing the function that does get each selected element if it exist else it displays error msg
import getElement from './utils/getElement.js';
import getUser from './utils/getUsers.js';
import displayPerson from './utils/displayUsers.js';

// picking elements that will take in action and effects
const btn = getElement('.btn');

const showUser = async () => {
  //   invoking the get User func expr
  const person = await getUser();
  // invoking the display user to get each user
  displayPerson(person);
};

// contents is displayed immediately the window loads
window.addEventListener('DOMContentLoaded', showUser);
// display user when the button is clicked
btn.addEventListener('click', showUser);
