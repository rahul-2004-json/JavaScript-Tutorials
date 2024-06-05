/*
Javascript is a dynamically typed language as variables types are determined at runtime.

Compile time: Period where code is converted form high level language to machine level language
Runtime :  Runtime is the period of time when a program is running and generally occurs after compile time.
*/

//On the basis of storing and accessing the data we two types of datatypes
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100   //number
const scoreValue = 100.3 //number

const isLoggedIn = false  //boolean
const outsideTemp = null   //empty {}
let userEmail;   //undefined 

const id = Symbol('123')     //Symbol is basically used to make variables unique 
const anotherId = Symbol('123')   //return type is also symbol

// console.table([id,anotherId]);

// console.log(id === anotherId);  // both id and anotherId are unique hence output will be false

// const bigNumber = 3456543576654356754n   //just write n after a large number to make it a BigInt 




// Reference (Non primitive)
//All reference type datatypes have return as object 
//function has return type as function object

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction(); //calling a function

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



// ++++++++++++++++++++++++++++++++++++++++
//Stack and Heap memory is used to assign variables at the back
//All primitive datatype are stored in stack and a copy of them is provided to us
// Non primitive datatype are stored in Heap and a direct referrence is given to us of them

let name1="Rahul";
let name2=name1;

name2="Ravi" ; //this doesn't change the original name1 as its copy is given to us in stack


let userone={
    name:"rahul",
    email:"rahul@gmail.com"
}

let usertwo=userone;  //now a direct refernce to original copy is provided to us

usertwo.name="Raneena" ; //this will also change the name in userone

console.log(userone.name);
console.log(usertwo.name);

