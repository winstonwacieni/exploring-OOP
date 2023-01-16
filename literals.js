/* The object can be created in two ways in JavaScript:

Object Literal
Object Constructor

*/
// Example: Using an object Literal. geeksforgeeks tutorial from geeksforgeeks.com

// Defining object

let person = {
  first_name: "Lernad",
  last_name: "Hofstader",

  // method
  getfunction: function () {
    return ` The name of the person is ${person.first_name} ${person.last_name}`;
  },
  // obect within and object
  phone_number: {
    mobile: "0712345678",
    landline: "0800-8884939",
  },
};
console.log(person.getfunction());
console.log(person.phone_number.landline);
