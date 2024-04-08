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
// const dom1 = document.getElementById("btn") as HTMLElement;
// const dom2 = <HTMLElement> document.getElementById("btn") ;
// const dom3 =  document.getElementById("btn")!;
// const image =  document.getElementById("img") as HTMLImageElement;
// dom1.onclick
// image.src="none"
// const img=document.querySelector("img")!;
// img.src="none"
const form = document.getElementById("myform");
const display = document.getElementById("displayresult");
form.onsubmit = (e) => {
    e.preventDefault();
    display.innerText = `The input you Entered is ${someinput.value}`;
};
// if you want to convert any value to number we can use Number(someinput.value)
const someinput = document.querySelector("form > input");
const Personobj = {
    name: "MOiz",
    email: "moiz77131@gmail.com"
};
let key = "email";
Personobj[key];
// const getOBJData=(key:"name"| "email"):string=>{
// return Personobj[key];
// }
const getOBJData = (key) => {
    return Personobj[key];
}; // Problem solved
console.log(getOBJData("email"));
const users = {
    Moiz: {
        age: 24
    },
    Love: {
        age: 24
    },
    Mama: {
        age: 24
    },
    forever: {
        age: 24
    }
};
// Parameters
const mul = (n, m) => {
    return m * n;
};
//  const concat=<T>(n:T):T=>{
//             // let text:T="Moiz loves Mama";
//             return n;
//  }
const Sami = {
    name: "Sami",
    post: "frontend dev",
    postno: 3
};
// const ans= concat<Employee>(Sami); // Now here we are passing Data type we will use
// console.log(ans.post);
const numberarray = []; // under the hood interface Array<T>
// Plot Twist :  we can use multiple Generic
// const concat=<T,U>(n:T,m:U):{n:T,m:U}=>{
//     // let text:T="Moiz loves Mama";
//     // return n+m; // Now Typescript doesnot know what data will be coming so it is not valid
//     return {n,m}; 
// }
// Extends
const concat = (n, m) => {
    // let text:T="Moiz loves Mama";
    // return n+m; // Now Typescript doesnot know what data will be coming so it is not valid
    return { n, m }; // Now Typescript doesnot know what data will be coming so it is not valid
};
const moizBoy = {
    name: "Moiz",
    post: "Tea BOy",
    postno: 0,
    salary: 1000000
};
// const ans = concat<Employee,Employee2>(Sami,moizBoy);
// Again consider our Employee Type
const data = [
    {
        name: "Moiz",
        post: "Tea BOy",
        postno: 0,
    },
    {
        name: "Sami",
        post: "Clerk",
        postno: 1,
    },
];
const filterONKey = (arr, key, value) => {
    return arr.filter((item) => item[key] === value);
};
const filteredData = filterONKey(data, "name", "Moiz");
// not working Argument of type 'Employee[]' is not assignable to parameter of type '[]'.
console.log(filteredData);
