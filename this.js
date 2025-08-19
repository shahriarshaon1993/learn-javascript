const Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
    };
};

const sakib = Person("Sakib", 35);
sakib.printName();
