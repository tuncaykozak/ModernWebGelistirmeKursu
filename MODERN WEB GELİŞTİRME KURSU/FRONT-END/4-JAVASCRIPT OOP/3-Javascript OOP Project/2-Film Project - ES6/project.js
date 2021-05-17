//Input Elements Selectors

const form = document.getElementById("film-form"); // Inputs' div
const titleElement = document.querySelector("#title"); // title Input
const directorElement = document.querySelector("#director"); // director Input
const urlElement = document.querySelector("#url"); // url Input (for banner)
const cardBody = document.querySelectorAll(".card-body")[1]; // second ".card-body" for deleting film
const clear = document.getElementById("clear-films"); // selecting "#clear-films" deleting all films button



// //Starting UI Object
// const ui = new UI(); // from ui.js

// //Creating Storage Object
// const storage = new Storage(); // from storage.js

//Loading All Events
eventListeners();

function eventListeners() {

    form.addEventListener("submit", addFilm); // will add film when submitting

    document.addEventListener("DOMContentLoaded", function() { // showing the the films that added before when the page submitted
        let films = Storage.getFilmsFromStorage(); // from storage.js
        UI.loadAllFilms(films); // form ui.js

    });

    cardBody.addEventListener("click", deleteFilm); // when clicking to run "delteFilm"

    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {

    const title = titleElement.value; // getting title Input's value
    const director = directorElement.value; // getting director Input's value
    const url = urlElement.value; // getting url Input's value

    if (title === "" || director === "" || url === "") { // Is any Input is blank?

        UI.displayMessage("Tum alanlari doldurunuz!", "danger"); // alert function - won't add the film


    } else {
        const newFilm = new Film(title, director, url); // a film object from film.js

        UI.addFilmToUI(newFilm); // adding the film to UI

        Storage.addFilmToStorage(newFilm); // adding film to storage

        UI.displayMessage("Film basariyla eklendi", "success"); // alert function - will add the film

    }

    UI.clearInputs(titleElement, directorElement, urlElement); // clearing Inputs

    e.preventDefault();
}

function deleteFilm(e) {

    if (e.target.id === "delete-film") { // if clicked to "delete-film" <a> element

        UI.deleteFilmFromUI(e.target); // from ui.js
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // a function from storage.js and for finding clicked <a> ' s parent --> <td><a href ... <td>'s previousElementSibling <td>${director}<td>'s previousElementSibling <td>${title}<td> 's textContent to deleting this film from storage
        UI.displayMessage("Silme Islemi Basarili!", "success");
    }

}

function clearAllFilms() {

    if (confirm("Emin misiniz?")) {
        UI.clearAllFilmsFromUI(); // from ui.js
        Storage.clearAllFilmsFromStorage(); //from storage.js

    }
}