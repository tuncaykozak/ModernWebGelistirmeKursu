let value;

const programmer = {

    name: "Tuncay Kozak",
    age: 3,
    email: "tuncaykozak@gmail.com",
    langs: ["Python", "Java", "Javascript"],

    adress: {
        city: "Eskisehir",
        street: "Tunali"
    },

    work: function() {
        console.log("Programci calisiyor");
    }

}


value = programmer;

value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.adress.city;

programmer.work();


const programmers = [
    { name: "Tuncay Kozak", age: 30 },
    { name: "Oguz", age: 25 }
];

value = programmers[0].name;

console.log(value);