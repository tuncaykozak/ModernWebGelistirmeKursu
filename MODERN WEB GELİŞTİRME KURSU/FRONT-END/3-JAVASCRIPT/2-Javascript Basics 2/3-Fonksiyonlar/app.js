// function merhaba() {
//     console.log("Merhaba");
// }
// merhaba(); // function call
// merhaba();
// merhaba();

// function merhaba(name, age) {
//     console.log(`Isim: ${name}  Yas: ${age}`);
// }
// merhaba("Tuncay", 25);
// merhaba("Ayse", 25);
// merhaba(); // undefined - undefined

// function merhaba(name, age) {
//     if (typeof name === "undefined") name = "Bilgi Yok";
//     if (typeof age === "undefined") age = "Bilgi Yok";
//     console.log(`Isim: ${name}  Yas: ${age}`);
// }
// merhaba();

function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
    console.log(`Isim: ${name}  Yas: ${age}`);
}
merhaba("Tuncay", 30);
merhaba("Kadir"); // Isim: Kadir  Yas: Bilgi Yok
merhaba();

function square(x) {
    //console.log(x * x);
    return x * x;
    console.log("Calismayacak"); // bu kisim calismayacak
}

function cube(x) {
    //console.log(x * x * x);
    return x * x * x;
}

// let a = square(12);
// a = cube(a);
// console.log(a);

let a = cube(square(12));
console.log(a);


function hello() {
    return "Merhaba";
}
console.log(hello());

// Function Expression

const merhabaName = function(name) {
    console.log("Merhaba " + name);
}

merhabaName("Tuncay");


// Immediately Invoked Function Expression (IIFE)

(function(name) {
    console.log("Merhaba " + name);
})("Tuncay");

const database = {

    host: "localhost",

    add: function() {
        console.log("eklendi");
    },

    get: function() {
        console.log("Elde Edildi");
    },

    update: function(id) {
        console.log(`Id: ${id} Guncellendi`);
    },

    delete: function(id) {
        console.log(`Id: ${id} Silindi`);
    }

}

console.log(database.host);
database.add();
database.get();
database.update(2);
database.delete(33);