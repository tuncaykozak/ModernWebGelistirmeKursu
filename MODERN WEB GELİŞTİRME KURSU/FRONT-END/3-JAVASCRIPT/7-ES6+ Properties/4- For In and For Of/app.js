const person = {
    name: "Tuncay Kozak",
    age: 30,
    year: 1991
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "Tuncay";

for (let prop in person) {
    console.log(prop, person[prop]); // name-age-year
}

for (let index in langs) {
    console.log(index, langs[index]); // 0-1-2-3
}

for (let index in name) {
    console.log(index, name[index]); // "Tuncay" harflerinde gezindi
}

for (let value of langs) {
    console.log(value);
}

for (let character of name) {
    console.log(character);
}