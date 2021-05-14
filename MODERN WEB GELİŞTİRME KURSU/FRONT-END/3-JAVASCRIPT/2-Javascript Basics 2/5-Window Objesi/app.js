// alert("merhaba");

// console.log(this); // window objesi (en genel objedir)

// console.log(this.alert("merhaba"));

// console.log(window); // this = window

// ALert

// const cevap = confirm("Emin misiniz?");
// console.log(cevap); // cevap = true/false

// if (cevap) {
//     console.log("Silin gitsin");
// } else {
//     console.log("Silmeyin");
// }

// if (confirm("Emin misiniz?")) {
//     console.log("Silin gitsin");
// } else {
//     console.log("Silmeyin");
// }

// const cevap = prompt("2+2= ");
// console.log(cevap);
// console.log(typeof cevap); //string

// if (cevap == "4") console.log("Dogru");
// else console.log("Yanlis");


let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if (confirm("Sayfa yenilensin mi?")) window.location.reload();
// else console.log("Sayfa yenilenmedi");

value = window.outerHeight; // pixel uzunlugu (asagidan yukari)
value = window.outerWidth; // pixel genisligi (sagdan sola)

value = window.innerHeight; // ic olcu
value = window.innerWidth; // ic olcu

value = window.scrollX;
value = window.scrollY;

console.log(value);