//while

// let i = 0;

// while (i < 10) {
//     console.log(i + 1);
//     i += 1; // i++;
// }

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i--; // i--
// }


// break - continue

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
//     i++; // i++
// }

// let i = 0;

// while (i < 10) {

//     if (i === 3 || i === 5) {
//         i++; // sonsuz donguyu engellemek icin
//         continue; // alttakileri calistirmadan dongunun basina gidecek : sonsuz dongu
//     }
//     console.log(i);
//     i++; // i++

// }


// do while

// let i = 0;

// do {
//     console.log(i); // once calisacak
//     i++;
// } while (i < 10); // sonra kosul kontrol edilecek 

const langs = ["Python", "Javascript", "Java"];

let index = 0;

while (index < langs.length) {

    console.log(langs[index]);
    index++;
}

console.log("");

for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);

}

console.log("");

langs.forEach(function(lang) {
    console.log(lang);
});

console.log("");
langs.forEach(function(lang, index) { //index degerlerini de yazdirmak icin
    console.log(lang, index);
});

console.log("");

const users = [
    { name: "Tuncay", age: 30 },
    { name: "Mustafa", age: 25 },
    { name: "Ali", age: 12 }
]

const names = users.map(function(user) {
    return user.name;
});

console.log(names);

console.log("");

const ages = users.map(function(user) {
    return user.age;
});

console.log(ages);

console.log("");

const user = {
    name: "Tuncay",
    age: 30
};

for (let key in user) {
    console.log(key); // property nameleri getirecek (name - age)
}

console.log("");

for (let key in user) {
    console.log(key, user[key]); // property namelerle birlikte degerleri de getirildi
}