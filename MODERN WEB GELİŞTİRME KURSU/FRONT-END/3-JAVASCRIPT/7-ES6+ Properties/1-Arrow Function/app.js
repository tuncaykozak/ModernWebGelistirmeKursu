// const merhaba = function() {
//     console.log("Merhaba");
// }

// merhaba();


//Arrow Function

// const merhaba = () => {
//     console.log("Merhaba");
// }

// const merhaba = (firstName) => { // tek parametre varsa parantezlere de gerek yok
//     console.log("Merhaba", firstName);
// }

// merhaba("Tuncay");

const merhaba = firstName => console.log("Merhaba", firstName);
merhaba("Tuncay");

const cube = x => x * x * x; // return yazmaya da gerek yok
console.log(cube(3));