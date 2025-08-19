let printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    };
};

const sakib = {
    name: "Sakib",
    age: 35,
};

const tamim = {
    name: "Tamim",
    age: 40,
};

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName();
