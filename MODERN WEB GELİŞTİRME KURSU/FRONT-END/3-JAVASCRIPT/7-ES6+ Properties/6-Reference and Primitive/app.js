let a = "Tuncay";
let b = "Tuncay";

if (a === b) { // veriler kiyaslaniyor
    console.log("Esit");
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

if (array1 === array2) { // bu referanslar bellekte ayni yeri(adresi) gosteriyor mu?
    console.log("Esit"); // false --> gozukmedi
}

const person1 = {
    name: "Tuncay",
    age: 30
};

const person2 = {
    name: "Tuncay",
    age: 30
};

if (person1 === person2) { // referans tipler kiyaslandi (yani adresleri)
    console.log("Esit"); // false --> gozukmedi
}

const cities = new Map();

cities.set("Ankara", 5);
cities.set("Istanbul", 15);
cities.set([1, 2, 3], "Array");


console.log(cities.get("Ankara"));
console.log(cities.get[1, 2, 3]); // undefined --> adresleri ayni degil (referans tip)

key = [1, 2, 3]; // degisken ile tutuldu
cities.set(key, "Array");

console.log(cities.get(key)); // Array --> degisken tip oldugu icin dondu