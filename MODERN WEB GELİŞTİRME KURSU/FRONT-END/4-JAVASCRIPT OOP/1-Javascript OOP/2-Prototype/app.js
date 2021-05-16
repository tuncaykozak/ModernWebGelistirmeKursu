//  const object = new Object();
//  const object2 = new Object();
//  object.name = "Tuncay";
//  console.log(object); // __proto__ : Object

//  function Employee(name, age) {
//      this.name = name;
//      this.age = age;

//      this.showInfos = function() {
//          console.log("Bilgiler gosteriliyor");
//      }

//      this.toString = function() {
//          console.log("Bu Bir Employee Objesi");
//      }

//  };

//  const emp1 = new Employee("Tuncay", 30);
//  console.log(emp1);

//  console.log(emp1.toString()); // [object Object] + eger Employee icinde varsa o calisitirilir

function Employee(name, age) {

    this.name = name;
    this.age = age;

    // this.showInfos = function() { // her bir objede olusacak -iyi yontem degil-
    //     console.log("Isim: " + this.name + " Yas: " + this.age);
    // }
};

Employee.prototype.showInfos = function() { // Employee de olustu
    console.log("Isim: " + this.name + " Yas: " + this.age);
};

const emp1 = new Employee("Tuncay", 30);
const emp2 = new Employee("Mustafa", 25);

console.log(emp1, emp2);

emp1.showInfos();
emp2.showInfos();