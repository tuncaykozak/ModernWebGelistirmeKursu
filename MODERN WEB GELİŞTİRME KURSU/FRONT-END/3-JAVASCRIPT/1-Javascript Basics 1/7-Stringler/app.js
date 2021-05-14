let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";


value = firstName + lastName;
value = firstName + " " + lastName;

value = "Tuncay";
//value = value + " Kozak";
value += " Kozak";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Caz")

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[firstName.length - 1]; //son harf

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l"); // -1 : yoksa bu cikiyor

value = firstName.charAt(0); // L
value = firstName.charAt(firstName.length - 1);

value = langs.split(",");

value = langs.replace("Python", "CSS");

value = langs.includes("Java"); // true
value = langs.includes("CSS"); // false

console.log(value);