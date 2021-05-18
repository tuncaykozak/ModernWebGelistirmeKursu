class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {

        this.xhr.open("GET", url);


        this.xhr.onload = function() {
            if (this.status === 200) { // this.xhr?
                callback(null, this.responseText); //this.xhr?
            } else { // errors
                callback("GET REQUEST : There is an error", null);
            }
        }

        this.xhr.send();
    }

    post(url, data, callback) {

        this.xhr.open("POST", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON data

        this.xhr.onload = () => {

            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            } else { // errors
                callback("POST REQUEST : There is an error", null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    put(url, data, callback) {

        this.xhr.open("PUT", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON data

        this.xhr.onload = () => {

            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            } else { // errors
                callback("PUT REQUEST : There is an error", null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    delete(url, callback) {



        this.xhr.open("DELETE", url);


        this.xhr.onload = function() {
            if (this.status === 200) { // this.xhr?
                callback(null, "Deleting Successfull");
            } else { // errors
                callback("DELETE REQUEST : There is an error", null);
            }
        }

        this.xhr.send();
    }
}

const request = new Request();
const albums = request.get("https://jsonplaceholder.typicode.com/albums", function(err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});
// console.log(albums); // undefined

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "Thriller" }, function(err, album) {
    if (err === null) {
        console.log(album);
    } else {
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/143", { userId: 143, title: "Tarkan - Karma" }, function(err, album) {
    if (err === null) {
        console.log(album);
    } else {
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});