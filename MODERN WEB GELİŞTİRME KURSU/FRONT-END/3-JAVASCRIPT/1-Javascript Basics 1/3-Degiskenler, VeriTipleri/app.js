//Degiskenler Olusturma

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a, b, c);

// console.log("mehaba");


//Primitive Veri Tiplerl

var a = 10; //Number Veri Tipi
var b = 3.14; //Number Veri Tipi
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

var name = "Tuncay"; //String Veri Tipi
console.log(name);
console.log(typeof name);

var a = true; //Boolean Veri Tipi
console.log(a);
console.log(typeof a);

var a = null; //Null Veri Tipi
console.log(a);
console.log(typeof a); //object : bug

var c; //Undefined Veri Tipi
console.log(c); //undefined
console.log(typeof c); //undefined


//Reference Veri Tipleri

var numbers = [1, 2, 3, 4, 5]; //Array Veri Tipi
console.log(numbers);
console.log(typeof numbers); //object
console.log(numbers[0]);

var person = { //Object Veri Tipi
    name: "Tuncay Kozak",
    age: 30
}
console.log(person);
console.log(typeof person); //OBJECT

var date = new Date(); //Date Veri Tipi 
console.log(date);
console.log(typeof date); //object

var merhaba = function() { //Function Veri Tipi
    console.log("merhaba");
}
console.log(merhaba); //function

//Veri Tiplerinin Farki

var a = 10;
var b = a;
console.log(a, b);

a = 20;
console.log(a, b);


var a = [1, 2, 3];
var b = a;
console.log(a, b);

a.push(4); //deger ekleniyor
console.log(a, b); // b a'nin gosterdigi adresi gosterecek