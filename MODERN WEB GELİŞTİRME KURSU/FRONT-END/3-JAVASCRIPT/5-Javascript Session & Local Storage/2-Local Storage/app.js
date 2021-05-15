//Local Storage

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50"); // Stringe cevirip kaydeder

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// localStorage.clear();


// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50"); // Stringe cevirip kaydeder

// console.log(localStorage.getItem("sport"));


// if (localStorage.getItem("sport") === null) {
//     console.log("Veri yok");
// } else {
//     console.log("veri var");
// }


// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// // localStorage.setItem("todos", todos);

// localStorage.setItem("todos", JSON.stringify(todos));

// // const value = localStorage.getItem("todos");
// // console.log(value); // String dondu

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value); // Array dondu



const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {

    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}