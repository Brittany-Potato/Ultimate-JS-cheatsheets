//* ~~~~~ for loop ~~~~~

// When you know exactly how many times to loop (E.g looping through an array)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// let i = 0 -> Starting point
// i < 5 -> loop condition
// i++ -> increment each time
// This prints the number 0 - 4

//* ~~~~~ while loop ~~~~~

// When you want to loop as long as a condition is true

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Loops the condition i < 5 is true
// Good for unpredictable loop counts


//* ~~~~~ do...while loop ~~~~~

// You want the code to run at least once, even if the condition is false

let l = 0;
do {
    console.log(l);
    l++;
} while (i < 5);

// Runs the block first, then checks the condition

//* ~~~~~ for...loop ~~~~~

// When you want to loop through values in arrays, strings, or iterables

const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color)
}




// Easier then a regular for loop for arrays
// Outputs: red, green, blue

//* ~~~~~ for...in loops ~~~~~

// When you want to loop through object properties (keys)

const person = {name: "Brittany", age: 25 };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// Loops through keys of an object
// Outputs: name: Brittany, age: 25

//* ~~~~~ Array methods ~~~~~

//* forEach()
// When you want to do something for each element in an array

[1, 2, 3].forEach(num => {
    console.log(num);
});

//* map()
// When you want to create a new array by transforming each item

const doubled = [1, 2, 3].map(n => n * 2);
// doubled = [2, 4, 6]

//* filter()
// When you want to keep only items that match a condition

const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
// evens = [2, 4]
