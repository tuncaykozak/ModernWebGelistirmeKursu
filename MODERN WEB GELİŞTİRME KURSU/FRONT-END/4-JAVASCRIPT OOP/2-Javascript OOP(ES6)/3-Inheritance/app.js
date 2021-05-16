function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("Isim:" + this.name + " Yas:" + this.age);
}

function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function() {
    console.log("Employee");
}

Employee.prototype.ShowInfos = function() {
    console.log("Isim:" + this.name + " Yas:" + this.age + " Maas:" + this.salary);
}

const emp = new Employee("Tuncay", 30, 4000);
console.log(emp);



//with ES6


class Person2 { //Superclass - Baseclass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Isim:" + this.name + " Yas:" + this.age);
    }

}

class Employee2 extends Person2 { // Derivedclass - Subclass - Childclass
    constructor(name, age, salary) {
        //this.name = name;
        //this.age = age;

        super(name, age); // like this.name, this.age
        this.salary = salary;
    }

    showInfos() {
        console.log("Isim:" + this.name + " Yas:" + this.age + " Maas:" + this.salary);
    }

    toString() { //Overriding
        console.log("Employee2");
    }

    raiseSalary(amount) {
        this.salary += amount;
    }

}

const emp2 = new Employee2("Tuncay", 30, 4000);
console.log(emp2);

emp2.raiseSalary(500); // Maas:4500 olarak gozukecek

emp2.showInfos(); // Overrided - Maas:4500
emp2.toString(); // Overrided