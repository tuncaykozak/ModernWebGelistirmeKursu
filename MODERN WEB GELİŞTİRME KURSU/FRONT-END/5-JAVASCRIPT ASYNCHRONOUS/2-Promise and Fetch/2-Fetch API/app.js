function getTextFile() {

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getTextFile();

function getJsonFile() {

    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}

getJsonFile();

// http://apilayer.net/api/live?access_key=6c221cae5833316a3ea1c4fd9466590e

function getExternal() {

    fetch("http://apilayer.net/api/live?access_key=6c221cae5833316a3ea1c4fd9466590e")
        .then(response => response.json())
        .then(data => console.log("1 USD = " + data.quotes.USDTRY + " TL"))
        .catch(err => console.log(err));

}

getExternal();