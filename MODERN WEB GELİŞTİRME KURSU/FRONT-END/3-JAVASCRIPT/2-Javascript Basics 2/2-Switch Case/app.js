// const process = "2";

// if (process === "1") {
//     console.log("Islem 1");
// } else if (process === "2") {
//     console.log("Islem 2");
// } else if (process === "3") {
//     console.log("Islem 3");
// } else if (process === "4") {
//     console.log("Islem 4");
// } else {
//     console.log("Gecersiz Islem");
// }

const process = 1;

switch (process) {
    case 1:
        console.log("Islem 1");
        break; // break olmazsa alt da satiri calistiricak (break gorene kadar calisir)

    case 2:
        console.log("Islem 2");
        break;

    case 3:
        console.log("Islem 3");
        break;

    default:
        console.log("Gecersiz Islem");
        break; // burada break olmasa da calisir
}