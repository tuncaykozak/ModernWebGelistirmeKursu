//1 Events

// const filterInput = document.getElementById("filter");

// // filterInput.onfocus = function() {
// //     console.log("naber");
// // }

// // filterInput.addEventListener("focus", function(e) {
// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.target);
// //     console.log(e.target.placeholder);
// //     console.log(e.target.className);


// //     //console.log("naber");
// // });

// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit", submitForm);

// function submitForm(e) {
//     console.log("Submit Eventi");
//     e.preventDefault();
// }



//2 Keyboard Events

// document.addEventListener("keypress", run);

// function run(e) {
//     //console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keydown", run);

// function run(e) {
//     //console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keyup", run); // basilan tus birakilinca calisiyor

// function run(e) {
//     //console.log(e.which);
//     console.log(e.key);
// }

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup", changeText);

// function changeText(e) {
//     header.textContent = e.target.value;
//     //console.log(e.target.value);

// }



//3 Mouse Events

// const cardBody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#tasks-title");

// // title.addEventListener("click", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // title.addEventListener("dblclick", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // title.addEventListener("mousedown", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // title.addEventListener("mouseup", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // title.addEventListener("mouseover", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // title.addEventListener("mouseout", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // cardBody.addEventListener("mouseover", run); //baska elemente gecince de calisacak
// // cardBody.addEventListener("mouseout", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);

// function run(e) {
//     console.log(e.type);
// };



//4 Input Events


// const filter = document.getElementById("filter");

// // document.addEventListener("DOMContentLoaded", load);

// // function load(e) {


// //     //console.log("sayfa yuklendi");
// // };

// // filter.addEventListener("focus", run);
// // filter.addEventListener("blur", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // filter.addEventListener("paste", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // filter.addEventListener("copy", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// // filter.addEventListener("cut", run);

// // function run(e) {
// //     console.log(e.type);
// // };

// filter.addEventListener("select", run);

// function run(e) {
//     console.log(e.type);
// };



//5 Event Bubbling & Capturing

// document.querySelector(".container").addEventListener("click", function() {
//     console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click", function() {
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click", function() {
//     console.log("Card Body");
// });


const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {

    if (e.target.className === "fa fa-remove") {
        console.log("Silme Islemi")
    }

    if (e.target.id === "filter") {
        console.log("Filtreleme Islemi");
    }

    if (e.target.id === "clear-todos") {
        console.log("Tum Tasklari Silme Islemi");
    }
    //console.log(e.target);
    //console.log("Naber");
};