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

console.log(longestWord); // "Jumps"
