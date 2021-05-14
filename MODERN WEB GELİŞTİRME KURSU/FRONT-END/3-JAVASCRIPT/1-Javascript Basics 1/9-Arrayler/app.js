let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];
//const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];


value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

numbers[2] = 1000;
value = numbers;

value = numbers.indexOf(1000);

value = numbers.push(2000);
value = numbers;

numbers.unshift(3000);
value = numbers;

numbers.pop();
value = numbers;

numbers.shift();
value = numbers;

numbers.splice(0, 3); // 0 dahil 3 dahil degil
value = numbers;

numbers.reverse(); //ters cevirmek
value = numbers;

value = numbers.sort(); //ilk rakamina gore siraladi

value = numbers.sort(function(x, y) {
    return x - y;
});

value = numbers.sort(function(x, y) {
    return y - x;
})

console.log(value);