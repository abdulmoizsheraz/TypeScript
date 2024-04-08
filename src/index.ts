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

// const dom1 = document.getElementById("btn") as HTMLElement;
// const dom2 = <HTMLElement> document.getElementById("btn") ;
// const dom3 =  document.getElementById("btn")!;
// const image =  document.getElementById("img") as HTMLImageElement;
// dom1.onclick
// image.src="none"

// const img=document.querySelector("img")!;
// img.src="none"

const form = document.getElementById("myform") as HTMLFormElement;
const display = document.getElementById("displayresult") as HTMLSpanElement;
form.onsubmit=(e:SubmitEvent)=>{
e.preventDefault();
  display.innerText=`The input you Entered is ${someinput.value}`;
}
// if you want to convert any value to number we can use Number(someinput.value)
const someinput=document.querySelector("form > input") as HTMLInputElement;


interface Person{
    name:string
    email:string
     // [key:string]:string // dynamic key we dont need to declare our keys before
}

const Personobj:Person={
    name:"MOiz",
    email:"moiz77131@gmail.com"
}
let key ="email"
Personobj[key as keyof Person]

// const getOBJData=(key:"name"| "email"):string=>{
// return Personobj[key];
// }

const getOBJData=(key : keyof Person):string=>{
return Personobj[key];
} // Problem solved
console.log(getOBJData("email"))






// ----------------------------UTILITY TYPES-----------------------------------------------------------------------------------------------

// Partial<Type>

type user = {
    name:string,
    email:string
}
type User2 = Partial<user>; // hover it 


// Required<type> // opposite of partial type
type user1 = {
    name?:string,
    email?:string
}
type User1 = Required<user1>; // hover it

// Readonly<>

type User3 = Readonly<user1>;
// Record <>
type User4 = Record<"name"|"email"|"gender",string>; // hover it

interface userInfo{
    age:number
}
type UserName = "Moiz" | "Love" | "Mama" | "forever"

const users:Record<UserName,userInfo>={
    Moiz:{
        age:24
    },
    Love:{
        age:24
    },
    Mama:{
        age:24
    },
    forever:{
        age:24
    }

}
// Pick
type orderInfo={
    id:string,
    user:string,
    city:string
    country:string
}
type shippinginfo=Pick<orderInfo,"city">

// and Omit
type excludecountryInfo=Omit<orderInfo,"country">


// Exclude<>

type Random = Exclude<string, string| number> // what it means that it cannot be string
// what is say is that minus string from string|number in other words we will get string at the end
type union = string | number | boolean;
type mustnotbeBoolean = Exclude<union,boolean> 
// Extract<>
type mustbeBoolean = Extract<union,boolean> 
// Non NUllable

type union1 = boolean | string | string | null | undefined ;

type mustbeNotNullable = NonNullable<union1> // will remove all null value


// Parameters

const mul=(n:number,m:number)=>{
return m*n;
}
type RandomProd = Parameters<typeof mul>; 
// under the hood : type RandomProd = [n: number, m: number]
type whatOurFunctionReturn = ReturnType<typeof mul>;
// as simple as that



// Generics in Typescript very important
// const func = (n:any):any=>{
// return n;
// }
// func("Moiz")
// func(63)
// func(true);
// but we cannot use it because the point of using Typescipt 
// Now Generic comes into game
 // So now lets make a function 

 type Employee={
    name:string,
    post:string,
    postno:number
 }
//  const concat=<T>(n:T):T=>{
//             // let text:T="Moiz loves Mama";
//             return n;
//  }

 const Sami:Employee={
name:"Sami",
post:"frontend dev",
postno:3
 }
// const ans= concat<Employee>(Sami); // Now here we are passing Data type we will use
// console.log(ans.post);
const numberarray:Array<number>=[]; // under the hood interface Array<T>

// Plot Twist :  we can use multiple Generic

// const concat=<T,U>(n:T,m:U):{n:T,m:U}=>{
//     // let text:T="Moiz loves Mama";
//     // return n+m; // Now Typescript doesnot know what data will be coming so it is not valid
//     return {n,m}; 

// }

// Extends
const concat=<T,U extends T>(n:T,m:U):{n:T,m:U}=>{ // U extends T means that Genaric type U is extends from T (i.e contain alll properties of T)
    // let text:T="Moiz loves Mama";
    // return n+m; // Now Typescript doesnot know what data will be coming so it is not valid
    return {n,m}; // Now Typescript doesnot know what data will be coming so it is not valid
}
// Let understand it with example


// we have Employee Type defined above
// lets make Employy2 
type Employee2={  
     name:string,
    post:string,
    postno:number,
    salary:number // extra property
}
const moizBoy:Employee2={
    name:"Moiz",
    post:"Tea BOy",
    postno:0,
    salary:1000000
}
// const ans = concat<Employee,Employee2>(Sami,moizBoy);

// Again consider our Employee Type

const data:Employee[]=[

    {
        name:"Moiz",
        post:"Tea BOy",
        postno:0,
    },
    {
        name:"Sami",
        post:"Clerk",
        postno:1,
    },
    

]
const filterONKey = <T, K extends keyof T>(arr: T[], key: K, value: T[K]): T[] => {
    return arr.filter((item) => item[key] === value);
};

const filteredData = filterONKey(data, "name", "Moiz");
 // not working Argument of type 'Employee[]' is not assignable to parameter of type '[]'.
console.log(filteredData);

















