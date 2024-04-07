"use strict";
// Typescript DataTypes
let a = 25;
// a="sad" // Error: Type 'string' is not assignable to type 'number'
console.log(a);
const b = 10;
const moiz = "moiz";
// console.log(b/moiz);
// ------------Let assign in Typescript------------
// Biggest Advantage of Typescript is Intellicence
let name1 = "moiz";
// let name2=<string>343;
console.log(name1.charAt(2));
// Union Type
let surname;
surname = 12;
console.log("The surname is ", surname);
let a1;
const sum = (n, m) => {
    return n + m;
};
console.log(typeof (sum(12, "moiz")));
// ------ Arrays in Typescript
const arr = [12, 13, 14, 45, 65];
const arr1 = ["moiz", "sheraz", "Mama Jan"];
const arr2 = new Array(20);
arr2[0] = "moiz";
arr2.forEach((i) => {
    i.charAt(2);
});
// tuple in TS
const tupleexample = ["moiz", 10, true, false];
;
const gigi = {
    height: 123,
    weight: 12,
    scolar: true,
    func: (n, m) => { console.log(n + m); }
};
gigi.func(12, 34);
const obj = {
    height: 34,
    weight: 12,
    gender: false
};
const obj2 = {
    height: 34,
    weight: 12,
    gender: true
};
const getData = (product) => {
    console.log(product);
};
const prod = {
    name: "Mac book",
    stock: "3",
    isAvailable: false,
    id: 123
};
getData(prod);
const errorhANDLER = () => {
    throw new Error();
};
// const mode:themeMode="light"
// ---------------------------------Classes in Typescipt------------------------------
class Player {
    constructor(height, weight) {
        this.height = 34;
        this.weight = 20;
        // Getter method
        this.getHeight = () => {
            return this.height;
        };
        this.weight = weight;
        this.height = height;
    }
}
let moizinstance = new Player(10, 150);
console.log(moizinstance.getHeight());
// --------------------------Type Assertion--------------------------
