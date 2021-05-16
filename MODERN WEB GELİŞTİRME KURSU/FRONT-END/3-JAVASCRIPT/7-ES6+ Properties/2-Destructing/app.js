// let number1, number2;

arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

//Destructing

// [number1, number2] = arr; // sirali olarak alacak

// const [number1, number2] = arr;

// console.log(number1, number2);

const numbers = {

    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};

// const { number1, number2, number3 } = numbers;

// console.log(number1, number2, number3); // undefined-undefined-undefined

// const { a, c, e } = numbers; // ozellik isimlerine gore aldu

// console.log(a, c, e);

// const { a: number1, c: number2, e: number3 } = numbers; // degisken adi atanabilir

// console.log(number1, number2, number3);


// const getLangs = () => ["Python", "Java", "C++"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1, lang2, lang3);



const person = {
    name: "Tuncay",
    year: 1993,

    showInfos: () => console.log("Bilgiler gosteriliyor...")
};

const { name: isim, year: yil, showInfos: bilgileriGoster } = person;

console.log(isim, yil);
bilgileriGoster();