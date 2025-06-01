//! What is RegEx?

// RegEx (Regular expression) is a sequence of characters that define a search pattern and it is used for:
// Searching
// Matching
// Replacing
// And validating strings (i.e. passwords)
// Works well with methods like .match(), .test(), .replace()

//! Basic syntax

// RegEx literal:
const pattern = /abc/;

// RegEx constructor
const patternConst = new RegExp("abc");

//! Common RegEx methods

// pattern.test(string) - Returns true is the pattern is found
// string.match(pattern) - Returns array of matches (or null)
// string.replace(p, r) - Replaces pattern p with string r
// string.search(pattern) - Returns index of match or -1 if not found
// string.split(pattern) - Splits string by pattern

//! RegEx syntax reference

// Characters

// . - Any character except new line - /a.b/ matches acb, a-b
// \d - Any digit (0-9) - /\D/ matches 3
// \D- Any non-digit - /\D/ matches A
// \w - word character (a-z, A-Z, 0-9,_) - /\w/ matches a
// \W - Non-word character - /\W/ match @
// \s - Whitespace - /\s/ matches space, tab
// \S - Non-Whitespace /\S/ matches a
// \b - Word boundary - /\bword\b/
// ^ - Start of string - /^Hi/ matches "Hi there"
// $ - End of string - /end$/ matches "The end"
// [] - Character set - /[aeiou]/ matches vowels
// [^] - Negated set - /[^aeiou]/ matches non-vowels

// Quantifiers

// * - 0 or more times - /a*/ matches aaa, a, ``
// + - 1 or more times - /a+/ matches a, aaa
// ? - 0 or 1 time - /a?/ matches aaa
// {n} - Exactly n times - /a{3}/ matches aaa
// {n,} - Atleast n times - /a{2,}/ matches aa, aaa
// {n,m} - Between n and m times /a{2,4}/ matches aa, aaa

// Grouping and Alternations

// (abc) - Capturing group - /(abc)/ matches "abc"
// (?:abc) - Non-capturing group
// `a - b` - Alternation (a or b)
// (?=abc) - Positive lookahead /\d(?=px)/ matchs digits before "px"
// (?!abc) - Negative lookahead - /\d(?!px)/ excludes digit before "px"

// Flags

// g - Global (Find all matches)
// i - Case-sensitive
// m - Multiline (^ and $ work on each line)
// s - Dot matches newline too (. -> all)
// u - Unicode support
// y - "sticky" match at last index

//! AI generated examples

// Check for email
const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
pattern.test("user@example.com"); // true

// Match phone number
const phone = /^\d{3}-\d{3}-\d{4}$/;
phone.test("123-456-7890"); // true

// Remove all non-letters
const cleaned = "abc123!@#".replace(/[^a-z]/gi, "");
// Result: "abc"

// Password validation (min 8 chars, one number)
const pw = /^(?=.*\d).{8,}$/;
pw.test("password1"); // true


