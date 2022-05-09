// a function that checks if the selector of the class or id does exist
const getElement = (selection) => {
  // getting the selected element in the document
  const element = document.querySelector(selection);
  // checking to see if the selected element exist
  if (element) {
    // return back that element
    return element;
    // checking to see otherwise
  } else {
    // throw an error
    throw new Error(`Element ${selection} does not exist`);
  }
};

// exporting JS in other to use module
export default getElement;
