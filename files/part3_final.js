// Definice promennych a, b, c pomoci let / const
const a = 10;
const b = 7;
let c = 2;

console.log("====================================================");
console.log("      Let's start with 3rd part of the lesson       ");
console.log("====================================================");

console.log("a:", a, "b:", b, "c:", c);

// Aritmeticke operatory
console.log("a + b:", a + b);
console.log("a + b + c:", a + b + c);

console.log("a - b:", a - b);
console.log("b - a:", b - a);

console.log("a * b:", a * b);
console.log("a ** b:", a ** b);

console.log("a / b:", a / b);
console.log("a % b:", a % b);

// Operatory porovnani
const x = '10';
console.log("Comparison operators");
console.log("a:", a, "x:", x);
console.log("typeof a:", typeof a, " typeof x:", typeof x);
console.log("a == x:", a == x);
console.log("a === x:", a === x);
console.log("a != x:", a != x);
console.log("a !== x:", a !== x);

// Další příklady k === / == a !== / !=

// Operator precedence
console.log("Operator precedence");
console.log(4 + 5 - 10 + 7 * 4 + 3)
console.log((4 + 5 - 10 + 7) * 4 + 3)

// Komentare
console.log("====================================================");
console.log("                   Comment types                    ");
console.log("====================================================");

// Definice promenne test
let test = "Hello world";

// Inline komentar
let test_alt = "Hello world"; // Definice promenne test

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
    return `Ahoj, ${name}!`;
}

// Console log typy
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