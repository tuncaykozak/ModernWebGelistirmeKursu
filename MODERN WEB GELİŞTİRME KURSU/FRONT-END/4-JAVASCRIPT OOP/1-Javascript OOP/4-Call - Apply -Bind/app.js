// CAll & APPLY & BIND

const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number1: 30,
    number2: 40
}


function addNumbers(number3, number4) {
    //console.log(this); // window
    //console.log(this.number1); // undefined (window da number1 ve number2 parametreleri yok)
    console.log(this.number1 + this.number2 + number3 + number4); // NaN
}

addNumbers(100, 200);


//Call

addNumbers.call(obj1, 100, 200); // 330
addNumbers.call(obj2, 100, 200); // 370


//Apply

addNumbers.apply(obj1, [100, 200]); // 330
addNumbers.apply(obj2, [100, 200]); // 370


//Bind

function getNumbersTotal(number3, number4) {

    return this.number1 + this.number2 + number3 + number4;
}

const copyFunction1 = getNumbersTotal.bind(obj1); // kopya fonksiyon1

console.dir(copyFunction1); //bound

const copyFunction2 = getNumbersTotal.bind(obj2);

console.dir(copyFunction2);


console.log(copyFunction1(100, 200)); // 330
console.log(copyFunction2(100, 200)); // 370