// Define variables with let / const
const a = 10;
const b = 7;
let c = 2;

console.log("====================================================");
console.log("      Let's start with 3rd part of the lesson       ");
console.log("====================================================");

// Arithmetic operations
console.log(a + b);
console.log(a + b + c);

console.log(a - b);
console.log(b - a);

console.log(a * b);
console.log(a ** b);

console.log(a / b);
console.log(a % b);

// Operator precedence
console.log("Operator precedence");
console.log(4 + 5 - 10 + 7 * 4 + 3)
console.log((4 + 5 - 10 + 7) * 4 + 3)

// Comments
console.log("====================================================");
console.log("                   Comment types                    ");
console.log("====================================================");

// Define variable test
let test = "Hello world";

// Alternative commentary
let test_alt = "Hello world"; // Define variable test

/* This is a multiline JavaScript comment
 * You can use this format in all files and JS scripts you create
 */

/**
* Function that greets a user
* @author   Filip
* @param    {String} name    Name of the user
* @return   {String}         Greeting message
*/
function greetUser(name) {
    return `Greetings, ${name}!`;
}

// Console log types
console.log("====================================================");
console.log("                 CONSOLE Log types                  ");
console.log("====================================================");

console.log(console);
console.log("console.log()");
console.warn("console.warn()");
console.error("console.error()");

console.count("ENGETO");
console.count("ENGETO");
console.count("ENGETO");