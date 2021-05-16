// console.log(window);
// console.log(this); // uzerinde bulunan object --> window

// const emp1 = {
//     name: "Tuncay",
//     age: 30
// };

// const emp2 = {
//     name: "Ahmed",
//     age: 25
// };

// emp1.year = 1991;
// emp1.showInfos = function() { console.log("Bilgiler gosteriliyor"); };
// emp1.showInfos();
// console.log(emp1);

// function Employee() {
//     this.name = "Tuncay"; // burdaki object i gosterecek
// }

// const emp3 = new Employee();
// console.log(emp3);

// const emp4 = new Employee();
// console.log(emp4);

function Employee(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;


    this.showInfos = function() {
            console.log(this.name, this.age, this.year);
        }
        //console.log(this);
}

const emp1 = new Employee("Tuncay", 30, 1991);
const emp2 = new Employee("Mustafa", 25, 1993);

// console.log(emp1, emp2);

emp1.showInfos();
emp2.showInfos();