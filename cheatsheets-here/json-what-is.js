//! What is JSON?

// JSON stands for "Javascript Object Notation". and its a lightweight way to store and exchange data. Most commonly between a server and webapp.
// Looks like an object but is text format only with specific rules.

//! JSON syntax rules

// Data is in name/value pairs
// Data is comma (,) seperated
// Objects use {} and Arrarys use []
// strings must be in double quotes - "name": "Fredrick"
// Support data types include: string, number, boolean, null, array and object

//! example of JSON

// {
//   "name": "Fredrick",
//   "age": 20,
//   "isStudent": false,
//   "hobbies": ["progamming", "gaming"],
//   "address": {
//     "city": "tatos computer",
//     "zip": "something"
//   }
// }

//! JSON methods

// JSON.stringify() Converts a JavaScript object into a JSON string
const userName = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25}'

// JSON.parse() Converts a JSON string into a JavaScript object
const jsonStr = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // Alice

//! JSON use cases

// Sending data to a server - 
fetch("/api", {method: "POST", body: JSON.stringify(data) })

// Recieving data from a server - 
const data = await response.json();

// Storing in localStorage - 
localStorage.setItem("user", JSON.stringify(user))

// Reading from localStorage - 
const user = JSON.parse(localStorage.getItem("user"))

//! Common mistakes

// Single quotes in keys - "name": "Fredrick"
// Trailing commas - No trailing commas allowed
// Using functions or undefined - Not allowed in JSON