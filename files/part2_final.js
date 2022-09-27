// DEKLARACE PROMENNYCH

// spolecna uloha #1
console.log('DEKLARACE PROMENNYCH');
const name = "Matej";
const skill = 'JavaScript';
console.log("Jmenuji se " + name + " a ucim se " + skill);

// spolecna uloha #2
const x = 5;
const y = 3;
const z = "7";
console.log(x + y);
console.log(x + z);

// samostatna uloha #1
// - vytvorte promennou s nazvem `mojeJmeno` (`jmeno uz je obsazena`), priradte ji jako hodnotu sve jmeno
// - vyvorte promennou `hobby`, priradte ji jako hodnotu nejaky svuj konicek
// - nezapomenout ze hodnoty v tomto pripade budou text - davame do uvozovek
// - v console.log vytisknout vetu "Jmenuji se <jmeno> a mam rad(a) <hobby>"
const myName = "Matej";
const hobby = "pleteni";
console.log("Jmenuji se " + myName + " a bavi me " + hobby);
// -------------------------


// VYSKAKOVACI OKNA #1 (prompt)
// spolecna uloha #3 
console.log('VYSKAKOVACI OKNA #1');
const input1 = prompt('Zadej prvni cislo');
const input2 = prompt('Zadej druhe cislo');
const result = input1 + input2;
console.log(result);
// -------------------------


// DATOVE TYPY
console.log('DATOVE TYPY');
// Number
console.log('Number');

const n1 = 1;
console.log(n1);

// Uvedeni funkce typeof
console.log(typeof(n1));

const n2 = 5;
console.log(n2);

const n3 = 1.5;
console.log(typeof(n3));
console.log(n2 + n3);

// String
console.log('String');

const s1 = "ahoj";
console.log(s1);
console.log(typeof(s1));

const s2 = 'ahoj';
console.log(s2);

const s3 = "That's OK";
console.log(s3);

const s4 = '20';
const s5 = '22';
console.log(s4 + s5);
console.log(s4 + n2);

// Boolean
console.log('Boolean');

b1 = 5 > 3;
console.log(b1)
console.log(typeof(b1));

b2 = 5 < 3;
console.log(b2)

b3 = 5 == 5;
console.log(b3)

b4 = 'Matej' == 'Matej';
console.log(b4)

// Undefined
console.log('Undefined');

let empty1;
console.log(empty1);
console.log(typeof(empty1));

// Null
console.log('Null');

const empty2 = null;
console.log(empty2);
console.log(typeof(empty2));

// Prevadeni String na Number
console.log('Prevadeni String na Number');

// spolecna uloha #4
const text1 = '20';
const text2 =  '22';
const num1 = Number(text1);
const num2 = Number(text2);
const result2 = num1 + num2;
console.log(result2);
// ------------------------- 


// VYSKAKOVACI OKNA #2
console.log('VYSKAKOVACI OKNA #2');

// alert
alert();
alert("baf!");

// prompt
const userName = prompt('Vyber si uzivatelske jmeno');
console.log(userName);

// confirm
const accept = confirm('Souhlasis s obchodnimi podminkami?');
console.log(accept);

// samostatna uloha #2
// napiste program, ktery:
// - vyzve uzivatele, aby napsal sve jmeno, ulozi ho do promenne 'jmeno' 
// - vyyve uzivatele, aby napsal jak se citi, ulozi ho do promenne 'pocit' 
// - vyskakovaci okno s textem, ze napr. 'Lenka se citi jako hacker'
const user = prompt('Jak se jmenujes?');
const feeling = prompt('a jak se citis?');
alert(user + ' se citi ' + feeling);