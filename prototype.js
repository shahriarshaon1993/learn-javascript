function Person(name, age) {
    const person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {
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

const sakib = Person("Sakib", 36);
const tamim = Person("Tamim", 40);

tamim.play();
