// Scope Kavrami

// Global Scope

// function a() {
//     // Function Scope
// }

// if () {
//     // Block Scope
// }

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func() {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1, value2, value3);
// }
// Func(); // kendisine ozel degiskenler - birbirine karismiyor

//console.log(value1, value2, value3);

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a, b, c); // gozukecektir
// }

// console.log(a);
// console.log(b); // not defined
// console.log(c); // gozukmedi

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// if (true) {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1, value2, value3); // 40 50 60
// }

// console.log(value1); // 40 -- disarda degisti
// console.log(value2); // 20 -- disarda degismedi
// console.log(value3); // 30 -- disarda degismedi


// var database = "123456";
const database = "123456"; // karismamasi icin const yapilabilir (let de yapilabilir)

if (true) {
    let database = "4534534"; //disarida da degisiyor
    console.log(database); // icerdeki deger
}

console.log(database); //sabit oldugu icin if blogunda degisitirilemedi (degerini korudu)