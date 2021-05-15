const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //for all eventListeners

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function addTodo(e) {

    const newTodo = todoInput.value.trim();

    if (newTodo === "") {

        showAlert("danger", "Lutfen bir todo girin!"); // ikaz icin alert
    } else {

        addTodoToUI(newTodo); // Arayuze ekleme fonksiyonu

        addTodosToStorage(newTodo);

        showAlert("success", "Todo basariyla eklendi"); // basarili kayit icin alert
    }


    todoInput.value = "";

    e.preventDefault();
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function() {
        alert.remove();
    }, 1000);
};

function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");


    listItem.className = "list-group-item d-flex justify-content-between";

    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";


    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);


    todoList.appendChild(listItem);

};

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodosToStorage(newTodo) {

    let todos = getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

};

function loadAllTodosToUI() {

    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {

        addTodoToUI(todo);

    });

};

function deleteTodoFromStorage(deleteTodo) {

    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index) {


        if (todo === deleteTodo) {

            todos.splice(index, 1);
        }

    })
    localStorage.setItem("todos", JSON.stringify(todos));

}

function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {

        e.target.parentElement.parentElement.remove();

        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Todo silindi");

    }
};

function filterTodos(e) {

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase();

        if (text.indexOf(filterValue) === -1) {

            listItem.setAttribute("style", "display : none !important");
        } else {
            listItem.setAttribute("style", "display : block");
        }
    })
}

function clearAllTodos(e) {

    if (confirm("Tumunu Silmek Istediginizden Emin misiniz?")) {

        //todoList.innerHTML = ""; // yavas

        // todoList.removeChild(todoList.firstElementChild); // Tez Calismasi
        // console.log(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild); // Evi Temizle
        // console.log(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild); // Ezme Hazirla
        // console.log(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild); // null
        // console.log(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild); // hata
        // console.log(todoList.firstElementChild);

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");
    }
}