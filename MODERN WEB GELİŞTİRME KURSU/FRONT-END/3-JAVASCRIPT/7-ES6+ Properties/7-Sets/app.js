const mySet = new Set();
console.log(mySet);

mySet.add(100);
mySet.add(100); // eklenmedi !hata da vermedi
mySet.add(3.14);
mySet.add("Tuncay");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({ a: 10, b: 20 });

console.log(mySet);


const mySet2 = new Set([100, 3.14, "Tuncay"]);

console.log(mySet2);


console.log(mySet.size); // 6 eleman

mySet.delete("Tuncay");

console.log(mySet); // "Tuncay" silindi


console.log(mySet.has(3.14)); //True
console.log(mySet.has("Tuncay")); //False

console.log(mySet.has([1, 2, 3])); // false


mySet.forEach(function(value) {
    console.log(value);
})

for (let value of mySet) { // forEach ile ayni sonucu verdi
    console.log(value);
}

const array = Array.from(mySet2);
console.log(array); // 3 elemanli mySet2