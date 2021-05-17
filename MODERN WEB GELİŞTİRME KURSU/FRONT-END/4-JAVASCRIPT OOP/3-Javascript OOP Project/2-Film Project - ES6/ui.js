// function UI() {

// }
class UI {
    static addFilmToUI(newFilm) {

        const filmList = document.getElementById("films");
        filmList.innerHTML += ` <!--adding film block -->

    <tr>
        <td><img src = "${newFilm.url}" class = "img-fluid img-thumbnail"> </td>
        <td> ${newFilm.title} </td> 
        <td> ${newFilm.director} </td>
        <td> <a href = "#" id = "delete-film" class = "btn btn-danger"> Filmi Sil </a></td> 
    </tr> 

    `
    }


    static clearInputs(element1, element2, element3) { // clearing Inputs function

        element1.value = "";
        element2.value = "";
        element3.value = "";

    }

    static displayMessage(message, type) {

        const cardBody = document.querySelector(".card-body"); // ".card-body" includes Inputs and submit button to adding films

        const div = document.createElement("div"); // creating div element

        div.className = `alert alert-${type}`; // div's classes to create alert (danger : red)
        div.textContent = message; //alert's message

        cardBody.appendChild(div); //div will go into ".card-body"

        setTimeout(function() {
            div.remove(); // deleting this div 
        }, 1000); // in 1000ms (1 second)
    }

    static loadAllFilms(films) {

        const filmList = document.getElementById("films");

        films.forEach(function(film) {
            filmList.innerHTML += ` <!--adding film block from Local Storage -->

        <tr>
            <td><img src = "${film.url}" class = "img-fluid img-thumbnail"> </td>
            <td>${film.title}</td> 
            <td>${film.director}</td>
            <td><a href = "#" id = "delete-film" class = "btn btn-danger"> Filmi Sil</a></td> 
        </tr> 
    
        `
        });

        films
    }

    static deleteFilmFromUI(element) {

        element.parentElement.parentElement.remove(); // deleting a'parent element  --> <td> 's parent elemet --> <td> (its created film block - <td>...</td> -)
    }

    static clearAllFilmsFromUI() {

        const filmList = document.getElementById("films") // selecting "#films" div element

        while (filmList.firstElementChild !== null) { // work if "#films" has a childElement
            filmList.firstElementChild.remove(); // then remove it's childElement
        }
    }
}