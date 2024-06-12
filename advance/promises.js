/*
Promise is an object representing eventual completion or failure of asynchronous operations

-Placing the order is like creating a promise.
-Waiting for the book is the pending state.
-Book arriving is the fulfilled state.
-Problems with the order represent the rejected state.

Promises in JavaScript provide a way to handle asynchronous 
operations in a more readable and manageable way by allowing you to specify what should happen when the operation either completes successfully or fails.


//We consume a promise by calling then() and catch() 


 */

//How to make a promise and store it in a const
//Promise expects a callback function containing the resolve or reject 

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// //.then is linked with resolve and will run only when resolve() is called  inside our promise
//.then also expects a callback function 
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })



//Another way to make promises and use .then directly
// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log(`Promise is in TimeOut`);
//         resolve();  //this should be written in case our work is completed
//     },1000);
// }).then(function(){
//     console.log(`Promise is resolved`);
// })



//How to pass parameters inside the resolve 
//resolve() can take paramters as object, array or string or anything we want to give
// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log(`Promise is in TimeOut`);
//         resolve({username:"Rahul",age:19});  //this should be written in case our work is completed
//     },1000);
// }).then(function(items){  //callback function has right to expect a parameter
//     console.log(`Promise is resolved and User found is ${items.username} with age ${items.age}`);
// })



//Making promises using both resolve and reject
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')   //reject() is in connection with catch
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username 
// }).then((username) => {   //here as we are doing chaining of then , so value returned from above then would be given here and can be used 
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected")) //finally() also expects a callback and it usually runs after the promise is either resolved or reject
// //finally is default which runs anyway



//Promise consumption with async await keywords
// const promiseFive = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let error = true
//             if (!error) {
//                 resolve({username: "hitesh", password: "123"})
//             } else {
//                 reject('ERROR: Something went wrong')   //reject() is in connection with catch
//             }
//         }, 1000)
// })

// //how to write now consumption for above async await 
// //async is similar to .then or .catch it also waits for the work to be completed if completed then only moves forward otherwise gives error
// async function consumePromise(){
//     //we are using try catch to handle the error effectively
//     try {
//         const response=await promiseFive  //since promise is an object so it can't be accessed like promiseFive() 
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }

// }

// //call the above async function
// consumePromise();




//how to use fetch to get responses from api
//fetch returns a promise to us


//fetch with async await
// async function getdetails(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')                   //don't forget to put await keyword
//         const data= await response.json();    //here converting the response to json also takes time so we should write await here also
//         console.log(data);
//     } catch (error) {
//         console.log(`${error}`);
//     }
// }
// getdetails();



//fetch with .then and .catch
//we know fetch returns a promise 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



//Promise.all()  works on array of promises
/*
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.




const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
 });

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

*/