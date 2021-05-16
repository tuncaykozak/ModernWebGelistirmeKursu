function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("Isim:" + this.name + " Yas:" + this.age);
}

const person = new Person("Tuncay", 30);
console.log(person);

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Tuncay", 30, 4000);

console.log(emp);
emp.showInfos();
console.log(emp.toString()); // [ object Object]

Employee.prototype.toString = function() {
    console.log("Employee");
}

emp.toString(); // "Employee" dondu - diger fonksiyonu bastirdi - (Override)

Employee.prototype.ShowInfos = function() {

    console.log("Isim:" + this.name + " Yas:" + this.age + " Maas:" + this.salary);
}

emp.ShowInfos(); // Override

console.log(emp);


// Call Using

function Employee2(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

const emp2 = new Employee2("Tuncay", 30, 4000);
console.log(emp2);