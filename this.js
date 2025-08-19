const Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: "Mr. John Deo",
            printName: function () {
                console.log(this.name);
            },
        },
    };
};

const sakib = Person("Sakib", 35);
sakib.printName();
sakib.father.printName(); // Mr. John Deo
