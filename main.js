/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: nothing, undefined.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: the string Tim


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: the string JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: the string Hello, how are you?


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: the difference between high and low; 40

math = high - "5";
// Q: What is `math` set to?
// A: 45
// A: even though 5 is set as a string, the computer will still look inside the string and treat it like a number.


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var timAge = today - born;
var timAge = "Tim is " + timAge + " years old";


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Kevin";
var instructorName = "Tim";


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

statement;












