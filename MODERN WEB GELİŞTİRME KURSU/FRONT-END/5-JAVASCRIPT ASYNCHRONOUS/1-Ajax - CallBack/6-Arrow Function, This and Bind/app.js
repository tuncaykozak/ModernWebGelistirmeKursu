const person = {
    age: 25,

    tellAge: function() {
        console.log(this);
        console.log(this.age);
        //this --> person
    }.bind(this),
    //this --> window

    tellAge2: () => {
            console.log(this);
            console.log(this.age);
        }
        //this --> window
}

person.tellAge(); // person and age before ".bind(this)"
person.tellAge2(); // window