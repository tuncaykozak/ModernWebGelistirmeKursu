class Matematik {

    cube(x) {
        console.log(x * x * x);
    }
}

const math = new Matematik();
console.log(math); //fonksiyon gozuktu

math.cube(3); //27

//Static

class Matematik2 {

    static cube2(x) {
        console.log(x * x * x);
    }
}

Matematik2.cube2(3); // 27

const math2 = new Matematik2();
console.log(math2); // cube2 fonksiyonu yok

// math2.cube2(4); // kullanilamiyor