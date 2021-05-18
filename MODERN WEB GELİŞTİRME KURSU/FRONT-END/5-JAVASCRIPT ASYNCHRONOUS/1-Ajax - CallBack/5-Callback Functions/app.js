// const langs = ["Pyhton", "Java", "C++"];

// langs.forEach(function(lang) {
//     console.log(lang);
// })

document.getElementById("btn").addEventListener("click", function() {
    console.log("click");
})

function process1(callback) {
    setTimeout(function() {
        console.log("Process 1");
        callback();
    }, 3000);
}

function process2() {
    setTimeout(function() {
        console.log("Process 2");
    }, 2000);
}

process1(process2);

// process1(); // third
// process2(); // second
// console.log("Naber"); // first
// // *Asynchronous 

function process3(callback) {
    setTimeout(function() {
        console.log("Process 3");
        callback();
    }, 6000);
}

function process4() {
    setTimeout(function() {
        console.log("Process 4");
    }, 4000);
}

process3(process4);

const langs = ["Pyhton", "Java", "C++"];

function addLang(lang, callback) {

    setTimeout(function() {
        langs.push(lang);
        console.log("added");
        callback();

    }, 11000)
}


function getAllLangs() {

    setTimeout(function() {

        langs.forEach(function(lang) {
            console.log(lang);
        })
    }, 3000)
}

// addLang("Javascript");
// getAllLangs();
// // *Asynchronous

addLang("Javascript", getAllLangs);