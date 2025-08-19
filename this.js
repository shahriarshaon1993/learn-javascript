// Listing Rules:
// - Implicit Binding
// - Explicit Binding
// - new Binding
// - window Binding

const sakib = {
    name: "Sakib",
    age: 35,
    printPlayerName: function () {
        console.log(this.name);
    },
};

sakib.printPlayerName();
