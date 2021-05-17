// function Storage() {

// }
class Storage {
    static addFilmToStorage(newFilm) {

        let films = this.getFilmsFromStorage(); // getting films array (empty or with ald films)

        films.push(newFilm); // adding film

        localStorage.setItem("films", JSON.stringify(films)); // adding Local Storage
    }

    static getFilmsFromStorage = function() { //getting films function
        let films; // an array for films (Local Storage key)

        if (localStorage.getItem("films") === null) { // if any film wasn't added
            films = []; // creating an array
        } else { // if any film was added
            films = JSON.parse(localStorage.getItem("films")); // adding film and convert to array with JSON.parse()
        }

        return films; // returning films to
    }

    static deleteFilmFromStorage = function(filmTitle) {

        let films = this.getFilmsFromStorage();


        films.forEach(function(film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        })

        localStorage.setItem("films", JSON.stringify(films));

    }

    static clearAllFilmsFromStorage = function() {
        localStorage.removeItem("films");
    }
}