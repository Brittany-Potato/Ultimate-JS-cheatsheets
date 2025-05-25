// A method is just a function that belongs to an object

const person = {
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello();

//! All methods are functions but not all functions are methods..

// Built-in Methods in javascript
// JS gives you many built-in objects like string, array, Math, etc, and these come with useful methods.

//! String Methods include
// - .toUpperCase() Converts string into uppercase. Example = "hi".toUpperCase() -> "HI"
// - .split() Splits string into an array. Example = "a, b, c".split(",") -> ["a", "b", "c"]
// - .includes() Check if a string contains something. Example = "hello".includes("h") -> true

//! Array methods include
// .push() Adds items to the end. Example = [1, 2].push(3) -> [1, 2, 3]
// .pop() Removes last item. Example = [1, 2, 3].pop() -> [1, 2]
// .map() Transforms each item in an array. Example = [1, 2].map(x => x*2) [2, 4]
// .filter() Filters items based on a condition. Example = [1,2,3].filter(x => x > 1) -> [1,2]
// .reduce() Reduces array to a single value. Example = [1,2,3].reduce((a,b) => a+b) -> 6
// .match() Returns an array of matches or null if none are found

//! Misc methods
// string.charAT(index) Index is a 0 based number (0 = first character) If the index is our of range it returns an empty string ("")
// Example = let name = "JavaScript";
// console.log(name.charAt(0));  "J"
// Alternative
// name[0]; "J" - You can use a bracket notation, which is simplier and more modern.

// string(or array).slice(startIndex, endIndex) StartIndex is where the extraction begins(inclusive)
// EndIndex (Optional) is where the extraction ends(exclusive)
// Example let test = "JavaScript";
// console.log(text.slice(0, 4)); "Java"
// console.log=(text.slice(4)); "script" - From index 4 to end
// console.log(test.slice(-6)); "Script" - Negative index starts from the end.

// .reverse() modifies the original array amd returns the same array but reversed
// let numbers = [1,2,3,4];
// numbers.reverse(); - Now numbers is reversed
// console.log(numbers); - [4,3,2,1]

// .join() Used to combine all elements of an array into a single string, optionally a seperator, if omitted it defults to a comma (,)
// Example let words= ['javascript', 'is', 'fun'];
// console.log(words.join()); "javascript, is, fun"
// console.log(words.join(' ')); "Javascript is fun"
// console.log(words.join(-)); "Javascript-is-fun"

// .replaceAll() Used to replace all occurances in a substring in a string
// string.replace(searchValue, replacement)
// searchValue - The text or pattern you want to replace
// replacement - The text to insert instead

// .on() Particularly when using 'discord.j' and 'tmi.js' libraries the .on method listens for specific events and defines what your 
// program should do when those events occur.
// .on syntax = object.on('eventName', callbackFunction);
//! Custom methods

const car = {
  brand: "toyota",
  honk: function () {
    console.log("Beep beep!");
  },
};

car.honk(); //Beep beep!

//! Arrow functions in methods

const dog = {
  sound: "woof",
  speak: function () {
    console.log(this.sound);
  },
};

dog.speak();

//! Expressions = Returns a value

// Arithmetic expressions - Use math operators and return numbers
// String expressions - Return strings "Hello" + " " + "World" "Hello World"
// Logical expressions - Return a boolean using logical operators (true && false = false) (true || false = true) (!false = true)
// Comparison expressions - Compare values and return a boolean (5 > 3 = true) (10 === 10 = true) (8 !== 9 = true) (7 <= 7 = true)
// Assignment expressions - Assigns a value to a variable (let x = 5; x += 3; = 8)
// Function expression - Defines a function as part of an expression ()
// Ternary expression - A short if/else that returns one of two values ?(if) :(else)
// Array and object expressions - Array ["red", "blue"] and object { name: Fredrick, age: 20 }
// Call expressions - Calls functions and returns values, console.log()
// New expression - Creates a new instance of objects (let date = new Date();)
// /[aeiou]/gi = Regular expression that matched all vowels (a, e, i....) globally and case-insensitively

// You can put expressions inside statements but you cannot put a statement in an expression

//! Properties

// .length doesn't use () at the end because it is a property and not a method.
// For strings: Returns the number or characters
// For arrays: Returns the number of elements

// Data properties are standard properties olding a value - const car = { brand: "Toyota", year: 2020 };
// Method properties hold a function - const user = { greet: function () { console.log("Hello);")}}; user.greet(); = Hello
// Computed Properties can create property names dynamically using square brackets [] - let key = 'color'; const obj = { [key]: "blue" }; console.log(obj.color); = blue
// Nested properties are objects containing another object - const student = { name: "Fredrick", address: { city: "long", zip: "E1 6AN"} };

// Accessing properties 
// Dot notation - most common = person.name

//! Classes

// .Client() Particularly when working with libraries like 'discord.js' or 'tmi.js' it is used to represent a bot client.
// .Client() Connects you to discord servers, listens for events, sends/recieves messagesa and manages roles, users, channels etc

//! Exercise

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a % b;
  },
};

console.log(calculator.add(1, 2));
console.log(calculator.substract(4, 5));
console.log(calculator.multiply(3, 3));
console.log(calculator.divide(2, 4));
