const obj = {
    test1: function() {
        console.log("Test 1");
    },
    test2: function() {
        console.log("Test 2");
    }
}

console.log(obj); // __proto__ : Object --> constructor.....

const emp = Object.create(obj);
emp.name = "Tuncay";
emp.age = 30;
console.log(emp); // __proto__ : Object --> test1, test2 (in obj)



function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test 1");
}

Person.prototype.test2 = function() {
    console.log("Test 2");
}

const person = new Person();

console.log(person); // __proto__ : Object --> constructor f Person()


function Employee(name, age) {
    this.name = name;
    this.age = age;
}


Employee.prototype = Object.create(Person.prototype); // object -->

const emp2 = new Employee("Tuncay", 30); // __proto__ : Person

console.log(emp2);

// emp2.test1();

Employee.prototype.myTest = function() {
    console.log("My Test");
}

console.log(emp2); // __proto__ : Person (altinda myTest fonksiyonu gozuktu)