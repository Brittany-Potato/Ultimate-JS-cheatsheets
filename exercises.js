//! Exercise One - AI assisted
// Convert "hello" => "Hello" using:
// .chatAT()
// .toUpperCase()
// .slice()

let word = "hello";

//step 1: Get the first letter
let firstLetter = word.charAt(0); // 'h'

//step 2: Capatalize it
let capitalLetter = firstLetter.toUpperCase(); //'H'

//step 3: Get the rest of the word
let restOfWord = word.slice(1); // 'ello'

//step 4: Combine them

let result = capitalLetter + restOfWord;

console.log(result); //Hello

// One line example

let greeting = "hello";
let finalGreeting = word.charAt(0).toUpperCase() + word.slice(1);
console.log(finalGreeting); //Hello

//! Exercise Two - AI assisted
// Check if a word is a palindrome

let pallindrome = "racecar";

//step 1: reverse the word
let reverse = pallindrome.split("").reverse().join("");

//step 2: check if reversed word equals the original;
let isPallindrome = pallindrome === reverse;

console.log(isPallindrome); //true

//.split('') - converts "racecar" to ["r", "a", "c"...]
//.reverse() - Reverses the array
//.join('') - joins it back into "racecar"
//compare "racecar" === "racecar" -> true

//! Exercise Three - Not Ai assisted
// Count the number of vowels in a string.

const input = "javascript";

const areVowels = ["a", "e", "i", "o", "u"];

const answer = input.match(areVowels);

console.log(answer); //3

//! AI fixed/assisted

const aiInput = "javascript";

const aiVowels = input.match(/[aeiou]/gi); //g = global, i = case-insensitive

const aiCount = aiVowels ? aiVowels.length : 0; // How mny vowels were found

console.log(aiCount); //3

//! Exercise Four - Not Ai assisted
// Replace all spaces with hyphens

const wordInput = "hello world js";

const replacedSpaces = wordInput.replaceAll(" ", "-");

console.log(replacedSpaces); // "hello-world-js"

//! Exercise Five - Ai assisted
// Find the longest word in a sentence

const sentence = "The quick brown fox jumps";

const word1 = sentence.split(" "); // ["the", "quick", ...]

const longestWord1 = word1.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestWord1); // "Jumps"

//! Exercise Six - Ai assisted
// Use .reduce() to add all numbers together
// Requires a callback function

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// The ballback function inside reduce adds the current number to the accumulator with the initial value of 0

console.log(sum);

//! Exercise Seven - Ai assisted
// Return the longest word

const animals = ["cat", "elephant", "tiger", "giraffe"];

const longestAnimalName = animals.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestAnimalName); //output "elephant"

//! Exercise Eight
// Count how many times each character appears in a string

const inputCount = "hello";

const wordSplit = inputCount.split("");

const charCount = wordSplit.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(charCount); // Outcome: { h:1, e: 1, l: 2, o: 1}

// wordSplit.reduce(...) transforms the array into a single value
// (acc, char) => {...} - Callback function, acc is acumulator and char is the current element being processed
// The end array {} is empty because you want to collect counts in the object.

//! Exercise Nine
// Use .reduce() to sum up all the letters in the given array

const numbersAgain = [1, 2, 3, 4, 5];

const numbersAdded = numbersAgain.reduce(
  (acc, currentValue) => acc + currentValue,
  0
);

console.log(numbersAdded);

//! Exercise Ten
// Find the maximum number

const givenNumbers = [3, 7, 2, 9, 5];

const largestNumber = givenNumbers.reduce((acc, currentValue) => {
  return Math.max(acc, currentValue);
});

console.log(largestNumber); // 9

//! Exercise Eleven
// Given an array of words, use .reduce() to count the total letters

const food = ["apple", "banana", "pear"];

const foodValue = food.reduce((sum, char) => sum);
