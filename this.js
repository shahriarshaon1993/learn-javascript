const printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2}, and ${v3}.`);
};

const sakib = {
    name: "Sakib",
    age: 35,
};

let v1 = "Handsome";
let v2 = "All-rounder";
let v3 = "Best Player";

const v = [v1, v2, v3];

printName.apply(sakib, v);
