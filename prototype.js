class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

const myDog = new Dog("Max", "Labrador");

myDog.walk();
myDog.bark();
