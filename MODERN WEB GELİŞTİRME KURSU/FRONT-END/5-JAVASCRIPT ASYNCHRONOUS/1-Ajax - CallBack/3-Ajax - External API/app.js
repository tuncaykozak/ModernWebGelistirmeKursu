document.getElementById("change").addEventListener("click", change);

function change() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.currencylayer.com/live?access_key=729b0709fa00a0a2881b1347735da524");

    xhr.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);

            const rate = response.quotes.USDTRY;
            const amount = Number(document.getElementById("amount").value); // String to Number

            document.getElementById("tl").value = amount * rate;
        }

    }
    xhr.send();
}