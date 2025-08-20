const personMethod = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    },
    play() {
        console.log(`${this.name} is playing`);
    },
};

function Person(name, age) {
    const person = Object.create(personMethod);

    person.name = name;
    person.age = age;

    return person;
}

const sakib = Person("Sakib", 36);
const tamim = Person("Tamim", 40);

sakib.eat();
tamim.eat();
