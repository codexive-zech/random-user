// importing the function that does get each selected element if it exist else it displays error msg
import getElement from './utils/getElement.js';

// stating the URL data is going to br fetched from
const url = 'https://randomuser.me/api/';

// picking elements that will take in action and effects
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
// converting the icons into an array using spread operator
const iconBtn = [...document.querySelectorAll('.icon')];
