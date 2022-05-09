// stating the URL data is going to br fetched from
const url = 'https://randomuser.me/api/';

const getUser = async () => {
  // fetching required data from the server
  const response = await fetch(url);
  // converting the data from the server URL into a json format.
  const data = await response.json();
  //   destructuring of data from the server and selecting the needed properties of the object to be displayed in the HTML
  const person = data.results[0];
  const { phone, email } = person;
  const { password } = person.login;
  const { large: image } = person.picture;
  const {
    street: { name, number },
  } = person.location;
  const {
    dob: { age },
  } = person;
  const { first, last } = person.name;
  //   returning object properties to be displayed in the HTML
  return {
    phone,
    email,
    password,
    image,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
