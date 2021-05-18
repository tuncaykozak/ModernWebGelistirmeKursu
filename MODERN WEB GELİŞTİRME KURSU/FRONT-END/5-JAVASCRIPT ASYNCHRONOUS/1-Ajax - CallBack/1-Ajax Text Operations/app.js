//Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

//Holds the status of the XMLHttpRequest:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function() {

    //XMLHttpRequest

    const xhr = new XMLHttpRequest();

    // xhr.onprogress = function() { // when status : 3
    //     console.log("Processing...");
    // }
    xhr.onload = function() {
        //console.log(this.readyState); // 4 (response is ready)

        if (this.status == 200) {
            //console.log(this.responseText); // this is a text file
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    //console.log(xhr); // status : 0

    // xhr.onreadystatechange = function() { // when onreadystate is changing 

    //     //console.log(this.readyState);
    //     //console.log(this.status);

    //     if (this.status == 200 && this.readyState == 4) {
    //         // response is ready
    //         console.log(this.responseText);

    //     }
    // }
    xhr.open("GET", "example.txt", true);

    xhr.send();




})