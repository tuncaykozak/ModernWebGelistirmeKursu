let value;

value = 123;

//String
value = String(3.14);
value = String(true);
value = String(function() { console.log() });
value = String([1, 2, 3, 4, 5]);

value = (10).toString();
value = (3.14).toString();


//Number
value = Number("123");
value = Number("3.14");
value = Number(null);
value = Number(undefined); //NaN
value = Number("hello"); //NaN
value = Number(function() { console.log() }); //NaN
value = Number([1, 2, 3, 4, 5]); //NaN

value = parseFloat("3.14");
value = parseInt("3");



console.log(value);
console.log(typeof value);


//Automatic
const a = "Hello" + 34; //otomatik olarak stringe cevrildi
console.log(a); //Hello34
console.log(typeof a); //string

const b = Number("34") + 53; //otomatik olarak numbera cevrildi
console.log(b); //87
console.log(typeof b); //number