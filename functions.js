//!Basic syntax

// Function Keyword that starts a function definition
//Greet The functions name (Used to call it later)
// (name) Parameter (input variable passed into the function)
// console.log(...) Code executed when function runs

function functionName(parameter1, parameter2) {
  //code to execute
  return something; //optional
}

//! Returning a variable

function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // Sum is now 8

//! Function declaration

function multiply(x, y) {
  return x * y;
}

//! Expression

const multiply = function (x, y) {
  return x * y;
};

//! Arrow function (ES6+)

const multiply = (x, y) => {
  return x * y;
};

// Or shorter

const square = (x) => x * x;

//! Advanced defult parameters

function greet(name = "friend") {
  console.log("Hello, " + name + "!");
}

greet(); //"Hello, friend!"

//! Exercise

function even(x) {
    if (x % 2 === even) {
        console.log("Even")
    } else {
        console.log("Uneven")
    }
};