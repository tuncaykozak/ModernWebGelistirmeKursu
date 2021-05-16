//Spread Operator

const langs = ["Python", "C++", "Java", "Php"]

// console.log(langs[0], langs[1], langs[2], langs[3]);
console.log(...langs);

// const langs2 = ["Javascript", "c#"];
const langs2 = ["Javascript", "c#", ...langs];

console.log(langs2); // eklendi


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b] = numbers; // ilk iki deger alindi
const [c, d, ...numbers2] = numbers; // kalan degerler numbers2 ye alindi
// const [a,b, ...numbers2] = numbers;

console.log(a, b);
console.log(numbers2);

const addNumbers = (a, b, c) => console.log(a + b + c);

const numbers3 = [100, 200, 300];

// addNumbers(numbers3[0], numbers3[1], numbers3[2]);
addNumbers(...numbers3); // toplami 600 dondu