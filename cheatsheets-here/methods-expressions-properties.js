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
// - .toUpperCase() Converts string into uppercase. Example - "hello".toUpperCase() -> "HELLO"
const upperCase = "Hello".toUpperCase();
// - .split() Splits string into an array. Example = "a, b, c".split(",") -> ["a", "b", "c"]
const splitting = "Hello".split();
// - .includes() Check if a string contains something. Example = "hello".includes("h") -> true
const including = "Hello".includes("H");

//! Array methods include
// .push() Adds items to the end. Example = [1, 2].push(3) -> [1, 2, 3]
const pushing = [1, 2].push(3);
// .pop() Removes last item. Example = [1, 2, 3].pop() -> [1, 2]
const popping = [1, 2, 3].pop();
// .map() Transforms each item in an array. Example = [1, 2].map(x => x*2) [2, 4]
const mapping = [1, 2].map((x) => x * 2)[(2, 4)];
// .filter() Filters items based on a condition. Example = [1,2,3].filter(x => x > 1) -> [1,2]
const filtering = [1, 2, 3].filter((x) => x > 1);
// .reduce() Reduces array to a single value. Example = [1,2,3].reduce((a,b) => a+b) -> 6
const reducing = [1, 2, 3].reduce((a, b) => a + b);
// accumulator is a variable inside reduce that stores the ongoin result of the operation you're performing inside
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

// .on() Particularly when using 'discord.js' and 'tmi.js' libraries the .on method listens for specific events and defines what your
// program should do when those events occur.
// .on syntax = object.on('eventName', callbackFunction);

//! Objects

// .Math is a built-in javascript object that provides mathematical constrants and functions.
// it is not a function or constructor. you just call its methods or access its properties directly
// Math.max() - Returns the largest number amoung arguments -  Math.max(1,5,10) -> 10
// Math.min() - Returns the smallest number amoung arguments - Math.min(1, 5, 10) -> 1
// Math.round() - Rounds a number to the nearest integer - Math.round(4.7) -> 5
// Math.floor() - Rounds a number down to the nearest integer - Math.floor (4.7) -> 4
// Math.ceil() - Rounds a number up to the nearest integer - Math.ceil(4.3) -> 5
// Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive) - Math.random() -> 0.629
// Math.pow(base, exp) - Raises base to the power of exp - Math.pow(2, 3) -> 8
// Math.sqrt() - Returns the squareroot of a number - Math.sqrt(9) -> 3

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

//! Operators

// Arithmetic
// + - Addition, example: 5 + 2 = 7
// - - Subtraction, example: 5 - 2 = 3
// * - Multiplication, example: 5 * 2 = 10
// / - Division, example: 5 / 2 = 2.5
// % - Modulus, example: 5 % 2 = 1
// ** - Exponentiation, example: 2 ** 3 = 8
// ++ - Increment, example: let x = 1; x++ = 2 after increment 
// -- - Decrement, example: let x = 2; x-- = 1 after decrement 

// Assignment
// = - Assignment, example: x = 5
// += - Add and assign, example: x += 2 = x = x + 2
// -= - Subtract and assign, example: x -= 2 = x = x - 2
// *= - Multiply and assign, example: x *= 2 = x = x * 2
// /= - Divide and assign, example: x /= 2 = x = x / 2
// %= - Modulus and assign, example: x = x % 2
// **= - Exponentiation and assign, example: x **= 2 x = x ** 2

//Comparison
// == - Equal (loose), example: '5' == 5 true
// === - Equal (Strict), example: '5' === 5 false
// != - Not equal (loose), example: '5' != 5 false
// !== Not equal (Strict), example: '5' !== 5 true
// > - Greater than, example: 5 > 2 true
// < - Less than, example: 5 < 2 false
// >= - Greater than or equal to, example: 5 >= 5 true
// <= Less than or equal to, example: 5 <= 2 false

// Logical operators
// && - Logical AND, example: true && false
// ` - (Backtick?), example: Logical OR
// ! - Logical NOT, example: false
// || - Logical evaluation, example: true || false = true BUT flase || false = false

// Bitwise Operators
// & - AND, example: 5 & 3 = 1 (0101 & 0011)
// ` - (Backtick), example: OR = `5
// ^ - XOR, example: 5 ^ 3 = 6
// ~ - NOT, example: ~5 = -6
// << - Left shift, example: 5 << 1 = 10
// >> - Right shift, example: 5 >> 1 = 2
// >>> - Zero-fill right shift, example: -5 >>> 1 = Large unsigned int

// Type operators
// typeof - Returns type of operand, example: typeof 123 = 'number'
// instanceof - Tests object constructor, example: x instanceof Date = true/false

// Ternary operator
// A shorthand for if-else conditions
// condition ? expr1 : expr2 example: 5 > 3 ? "yes" : "no" = "yes"

// Spread and rest operators
// ... - Spread, example: [...arr1, ...arr2]
// ... - Rest (in function args), example: function(...args) {}

// Destructuring assignment 
// Used to unpack values from arrays or objects
// const [a, b] = [1, 2];
// const {x, y} = {x: 10, y: 20};

// Optional chaining and nullish coalescing
// ?. - Optional chaining, example: obj?.prop = undefined if obj is nullish
// ?? - Nullish coalescing, exaple: null ?? 'default' = 'default'

// In, delete, void, new
// in - Checks if property exists, example: 'x' in obj true/false
// delete - Deletes a property, example: delete obj.prop true
// void - Evaluates but returns undefined, example: void 0 undefined
// new - Creates instance of object, example: new Date() = Date object
 
//! Properties

// .length doesn't use () at the end because it is a property and not a method.
// For strings: Returns the number or characters
// For arrays: Returns the number of elements

// Data properties are standard properties olding a value - const car = { brand: "Toyota", year: 2020 };
// Method properties hold a function - const user = { greet: function () { console.log("Hello);")}}; user.greet(); = Hello
// Computed Properties can create property names dynamically using square brackets [] - let key = 'color'; const obj = { [key]: "blue" }; console.log(obj.color); = blue
// Nested properties are objects containing another object - const student = { name: "Fredrick", address: { city: "long", zip: "E1 6AN"} };

// Accessing properties
// Dot notation - most common = person.name OR Bracket notation = person["name"]

// Property methods
// Object.keys(obj) Returns an array of property names
// Object.values(obj) Returns an array of property values
// Object.entries(obj) Returns an array of [key, value] pairs

// Advance property descriptors
// writeable: Can you change the value? true/false
// enumerable does it show in loops like for...in? true/false
// configurable: can you delete or reconfigure the property? true/false

// Example with a method
const cars = {
  brand: "Toyota",
  year: 2020,
  start: function () {
    console.log("Car is starting...");
  },
};
cars.start();

//! Classes - Allow you to create blueprints for objects

// They allow you to define propertie and methods that every objects created from the class will have. Classes are part of ES6
// a class defines the structure and behaviour of an object. You can then create instances(objects) of that class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const user1 = new Person("Fredrick", 20);
user1.greet(); // Hi my name is Alice

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
    return a / b;
  },
};

console.log(calculator.add(1, 2));
console.log(calculator.substract(4, 5));
console.log(calculator.multiply(3, 3));
console.log(calculator.divide(2, 4));
