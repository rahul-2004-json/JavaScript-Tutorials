// What is Immediately invoked function expression 
//these type of functions get invoked directly as the script loads , usefull in cases when we want to connect to database as soon as our code loads

//how to write IIFE
//This is unamed iife
// (
//     function(){
//         console.log(`Hi rahul`);
//     }

// )()


//how to write named iife
// (
//     function callmyname(name){
//         console.log(`Hello ${name}`);
//     }
// )('ravi')



//How to write two iffe in same file 
//In this case putting ; after one iffe ends is very important otherwise that iffe will not know when to stop

// (
//     function(){
//         console.log(`Hi rahul`);
//     }

// )();  //putting ; here is very important


// (
//     function callmyname(name){
//         console.log(`Hello ${name}`);
//     }
// )('ravi')



//We can also write arrow function inside iffe
// (
//     ()=>{
//         console.log(`welcome to jungle`);
//     }
// )()


//Why tO use IIFE
/*
In JavaScript, any variables or functions declared outside of a function are added to the global scope. 
If multiple scripts are loaded on a webpage, they can inadvertently overwrite each other's variables or functions if they happen to have the same names.
This can lead to bugs and unpredictable behavior in the application.



Using IIFE to Avoid Global Scope Pollution
An IIFE can help by encapsulating the variables and functions within a local scope, thereby avoiding conflicts with the global scope.
(
//this our scope of IIFE
//any variable declared inside will remain relevant inside only
)()

*/