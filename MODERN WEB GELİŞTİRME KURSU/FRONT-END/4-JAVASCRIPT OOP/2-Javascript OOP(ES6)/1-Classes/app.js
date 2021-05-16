//Syntactic Sugar

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function() {
    console.log("Isim:" + this.name + " Yas:" + this.age + " Maas:" + this.salary);
}

const emp = new Employee("Tuncay", 30, 4000);
console.log(emp);



class Employee2 {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos() {
        console.log("Isim:" + this.name + " Yas:" + this.age + " Maas:" + this.salary);
    }
}

const emp2 = new Employee2("Tuncay", 30, 4000);
console.log(emp2);

emp2.showInfos();