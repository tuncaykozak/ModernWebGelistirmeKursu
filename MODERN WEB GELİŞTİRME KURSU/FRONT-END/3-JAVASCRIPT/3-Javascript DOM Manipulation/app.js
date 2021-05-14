//Window Object
//console.log(document);

let value;

value = document;
value = document.body;
value = document.head;
value = document.location.hostname;
value = document.URL;

value = document;
value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"]; // ismine gore secmek
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].method; // get : default

//

value = document.getElementById("todo-form");
value = document.getElementById("tasks-title");

value = document.getElementsByClassName("list-group-item");
value = document.getElementsByClassName("card-header");

value = document.getElementsByTagName("li");
value = document.getElementsByTagName("div");

value = document.querySelector("#todo-form");
value = document.querySelector("#tasks-title");
value = document.querySelector(".list-group-item"); //sadece ilki gelecek
value = document.querySelector("li"); //sadece ilki gelecek
value = document.querySelector("div"); //sadece ilki gelecek

value = document.querySelectorAll(".list-group-item"); //NodeList

// value.forEach(function(el) {
//     console.log(el);
// })

// console.log(value);


//

const element = document.querySelector("#clear-todos");


console.log(element);
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent); // Tum Tasklari Temizleyin
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);


element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "100px";
element.href = "https://www.google.com.tr";
element.target = "_blank";

element.textContent = "Silin";

element.innerHTML = "<span style ='color : red'>Silin</span>"

const elements = document.querySelectorAll(".list-group-item");
console.log(elements);

elements.forEach(function(el) {
    el.style.color = "red";
    el.style.background = "#eee";
});

let element2;

element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");

element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el) {
    el.style.background = "blue";
    el.style.color = "black";
})

console.log(element2);


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card");

value = todoList;
value = todo;
value = cardrow;

value = todoList.childNodes; // satir atlamalari da sayiyor
value = todoList.childNodes[0];
value = todoList.children; //sadece elementleri aldi
value = todoList.children[0];
value = todoList.children[2].textContent = "Degisti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "BURADA";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling.previousSibling.previousElementSibling; //null


console.log(value);

//

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// newLink.textContent = "Farkli sayfaya git"; // herzaman kullanmak cok mantikli degil

// cardbody.textContent = "XXXX"; // tum cocuklar gitti

// const text = document.createTextNode("Naber");
// cardbody.appendChild(text);

newLink.appendChild(document.createTextNode("Farkli Sayfaya Git"));

cardbody.appendChild(newLink);

// console.log(cardbody);
console.log(newLink);

const todoList2 = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

todos[2].remove();
todoList2.removeChild(todoList2.lastElementChild);
todoList2.removeChild(todos[1]);

console.log(todos);
console.log(todoList2);

const cardbody2 = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

const oldElement = document.querySelector("#tasks-title");
cardbody2.replaceChild(newElement, oldElement);

console.log(newElement);
// console.log(cardbody2);

const todoInput = document.getElementById("todo");
let element3;

element3 = todoInput;
elemen3 = todoInput.classList;

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");

element3 = todoInput;
element3 = todoInput.placeholder;
todoInput.setAttribute("placeholder", "Naber");
element3 = todoInput;
todoInput.setAttribute("title", "Input");
element3 = todoInput.hasAttribute("required"); // false
element3 = todoInput.hasAttribute("name"); // true

todoInput.removeAttribute("name"); // name silindi
element3 = todoInput;

console.log(element3);