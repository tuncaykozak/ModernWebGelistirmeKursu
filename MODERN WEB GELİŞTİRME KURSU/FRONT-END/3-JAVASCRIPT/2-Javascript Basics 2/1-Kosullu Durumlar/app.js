//Karsilastirma

console.log(2 == 2);
console.log("js" == "java");

console.log(2 == "2"); // true: number 2 stringe cevrildigi icin
console.log(2 === "2"); // flase: tipleri de kontrol ediliyor

console.log(4 > 2);
console.log(2 > 4);

console.log(2 < 4);
console.log(4 < 2);

console.log(2 != 4); // true : esit degilse

console.log(2 >= 4);
console.log(2 <= 4);
console.log(2 <= 2); //true : esitlik


//Mantiksal Baglaclar

console.log(2 == 2);
console.log(!(2 == 2));

console.log((2 == 2) && ("Ahmed" == "Ahmed")); // ikisi de true olmali

console.log((4 == 2) || ("Ahmed" == "ahmed")); // ikisi de false ise false donecek


//if Blogu

const error = false;
if (error == true) { // if (error) {...} de yapilabilir
    console.log("Hata olustu");
} else {
    console.log("Hata olusmadi");
}

const user = "mmc";
if (user === "mmc") {
    console.log("Kullanici bulundu");
} else {
    console.log("Kullanici bulunamadi");
}

const process = "31";

if (process === "1") {
    console.log("Islem 1");
} else if (process === "2") {
    console.log("Islem 2");
} else if (process === "3") {
    console.log("Islem 3");
} else if (process === "4") {
    console.log("Islem 4");
} else {
    console.log("Gecersiz Islem");
}

const number = 100;

if (number === 100) {
    console.log("Sayi 100'e esit");
} else {
    console.log("Sayi 100'e esit degil");
}

//Ternary Operator

console.log(number === 100 ? "Sayi 100" : "Sayi 100 degil");


if (number === 100) console.log("sayi 100");
else console.log("Sayi 100 degil");