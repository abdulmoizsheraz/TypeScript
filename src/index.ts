// Typescript DataTypes

let a=25;
// a="sad" // Error: Type 'string' is not assignable to type 'number'
console.log(a);
const  b=10;
const  moiz="moiz"
// console.log(b/moiz);

// ------------Let assign in Typescript------------
// Biggest Advantage of Typescript is Intellicence


let name1: string = "moiz";
// let name2=<string>343;

console.log(name1.charAt(2));

// Union Type
let surname : string | number;
surname=12;
console.log("The surname is " ,surname) ;
// ---------------------------------
// type username = string | number;
type username = (n:number,m:string)=>string;

let a1:username;
const sum:username=(n,m)=>{
    return n+m;
};
console.log(typeof(sum(12,"moiz")));

// ------ Arrays in Typescript
const arr :number[]=[12,13,14,45,65];
const arr1 :string[]=["moiz","sheraz","Mama Jan"];
const arr2:Array<string> = new Array
(20);
arr2[0]="moiz"

arr2.forEach((i)=>{
   i.charAt(2);
})
// tuple in TS
const tupleexample : [string,number,boolean,boolean] =["moiz",10,true,false];

//  Object in TS
type Obj={
    height:number,
    weight:number
    gender?:boolean // optional
}
interface Obj2{ // mostly use in OOP
    height:number,
    weight:number
    gender?:boolean // optional
}
type FuncType = (n:number,m:number)=>void
interface NewObj extends Obj2{
    scolar:boolean,
    func:FuncType // optional
};
const gigi:NewObj={
height:123,
weight:12,
scolar:true,
func:(n,m)=>{console.log(n+m)}
}
gigi.func(12,34);
const obj:Obj={
    height:34,
    weight:12,
    gender:false
}
const obj2:Obj={
    height:34,
    weight:12,
    gender:true
}
// Functions in Typescript

// const func:string =(n:number,m:number)=>{
//     return a+b;
// }
type Funtype=(n:number,m:number,l?:number)=>number  // Here l is optional parameter

// const sum1:Funtype=(n,m,l)=>{
//     // l is possibly undefined
//     if(typeof l == "undefined") return m+n;
// return m+n+l;

// }

// Default Parameter
// const sum1:Funtype=(n,m,l=20)=>{
//     // Here l is default parameter
// return m+n+l;
// }
// console.log(sum1(-1000,23));

// ----------------------Rest OPerator-----------------------------------------------------------
type restoperator =(...m:number[])=>number;
// const sum1:restoperator=(...m)=>{
// return m;
// }
// sum1(12,23,45,67,87,65,34)
// need to be learn again this thing
// function funcobj (n:number):number{
// return 45;
// }
// const lol:restoperator=function lol(n){
//     return n;
// }
// Function with object
interface prodType{
    name: string;
    stock: string;
    isAvailable: boolean;
   readonly id:number // we cannot change it
}
type GetDataType = (product:{name:string,stock:string,isAvailable:boolean})=>void


const getData:GetDataType=(product)=>{
console.log(product);
}
const prod:prodType={
    name: "Mac book",
    stock: "3",
    isAvailable: false,
    id:123
}
getData(prod);
// Note we can either use INterface of Type

// Never Type
type themeMode = "light" | "dark"
const errorhANDLER=():never=>{
    throw new Error();
}
// const mode:themeMode="light"


// ---------------------------------Classes in Typescipt------------------------------
class Player {
 private height=34;
weight=20

constructor(height:number,weight:number){
this.weight=weight;
this.height=height;
}
// Getter method
getHeight=()=>{
    return this.height;
}
}
let moizinstance = new Player(10,150);
console.log(moizinstance.getHeight());










// --------------------------Type Assertion--------------------------

