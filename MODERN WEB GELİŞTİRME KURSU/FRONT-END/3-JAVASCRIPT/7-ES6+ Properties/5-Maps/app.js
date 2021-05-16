//Maps (Key - Value)

let myMap = new Map(); // Map olusturma

console.log(typeof myMap);

const key1 = "Tuncay";
const key2 = { a: 10, b: 20 }
const key3 = () => 2;

myMap.set(key1, "String");
myMap.set(key2, "Object Literal")
myMap.set(key3, "Function");

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);
console.log(myMap.size); //3


const cities = new Map();
cities.set("Ankara", 5);
cities.set("Istanbul", 15);
cities.set("Izmir", 4);

cities.forEach(function(value, key) {
    console.log(key, value);
});

for (let value of cities) {
    console.log(value); // array olarak donduler
}

for (let [key, value] of cities) {
    console.log(key, value); // ayri ayri alindi *destructing

};

for (let key of cities.keys()) {
    console.log(key); // sadece keyler alindi
};

for (let value of cities.values()) {
    console.log(value); // sadece valueler alindi
};


const array = [
    ["key1", "value1"],
    ["key2", "value2"]
]; // icice arraylers

const lastMap = new Map(array); // array Map
console.log(lastMap); // 2 arrayli Map


const array2 = Array.from(cities); // Map 'ten array
console.log(array2); // 3 arrayli bir array oldu - Map ile ayni -