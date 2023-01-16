// Example: Using an Object Constructor.
// function

function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
// creating new instances of person object

let person1 = new person("Kario", "ngiba");
let person2 = new person("Mtito", "Andei");

console.log(person1.first_name);
