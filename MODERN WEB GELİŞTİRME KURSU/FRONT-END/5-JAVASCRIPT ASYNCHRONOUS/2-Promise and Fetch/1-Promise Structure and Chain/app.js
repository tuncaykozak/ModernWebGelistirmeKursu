function getData(data) {

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // resolve("Olumlu Sonuc");
            reject("Olumsuz Sonuc");
        }, 5000);
    });
}

// console.log(getData("Merhaba"));

// getData("Merhaba").then(function(response) {
//     console.log(response);
// });

getData("Merhaba").catch(function(err) {
    console.log(err);
});

function getData2(data) {

    return new Promise(function(resolve, reject) {
        if (typeof data === "string") {
            resolve(data);
        } else {
            reject(new Error("Lutfen string bir deger giriniz"));
        }
    });
}

getData2("Merhaba")
    .then(response => console.log("Gelen Deger: " + response))
    .catch(err => console.error(err));

getData2(31)
    .then(response => console.log("Gelen Deger: " + response))
    .catch(err => console.error(err));


function addTwo(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Lutfen bir sayi giriniz"));
            }
        }, 3000);

    });
}

addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.log(err)); // only one catch

addTwo("10")
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.log(err)); // only one catch