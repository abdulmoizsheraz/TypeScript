// Typescript DataTypes

let a=25;
a="sad" // Error: Type 'string' is not assignable to type 'number'
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



