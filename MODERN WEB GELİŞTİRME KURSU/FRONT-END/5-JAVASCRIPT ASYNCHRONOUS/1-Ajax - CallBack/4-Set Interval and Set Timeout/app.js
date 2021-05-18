//Set Timeout

setTimeout(function() {
    console.log("Naber");
}, 2000)

//Set Interval

let i = 0;
let value = setInterval(function() {
    i++;
    console.log(i);
}, 1000)

//Clear Interval

document.getElementById("btn").addEventListener("click", function() {
    clearInterval(value);
});