const user = {
    username: "rahul",
    price: 839,

    welcomeMessage: function() {
        //if we write simple ${username} then that will give error because we are not referring to current context of the object keys and their values
        console.log(`${this.username} , welcome to website`);
        console.log(this); //prints the object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);  //In node environment we get output of this as  empty object{}
//But when we execute  console.log(this) in browser then we get window object , because in browser our global object is window for current context this
//the above knowledge is used in DOM manipulation
//Note : We can use (this) only inside the object not in function


// function myname(){
//     let username ="rahul"
//     console.log(this); // console logging (this) inside the function will return us a lot of values inside the object
//     //console.log(this.username)    // will give undefined as this.username doesn't work inside the function
// }


// const name = function(){
//     let username ="rahul"
//     console.log(this); // console logging (this) inside the function will return us a lot of values inside the object
//     //console.log(this.username)    // will give undefined as this.username doesn't work inside the function
// }



//How to make arrow function
const hashed= ()=>{
    let username="ravi";
    // console.log(this.username);   will return undefined 
    console.log(this);              //will return empty object   and browser environment window object will be returned
}
// hashed();


//Explicit return in arrow function
//When using curly braces then we need to write explicitly the return keyword
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(23,34));


//Implicit return in arrow function
//when single line inside arrow function then it assumes that we want to return the statement
// const addTwo=(num1,num2)=> num1+num2;


//Implicit return with parenthesis : used a lot in react
//No need to write return keyword here also
// const addTwo=(num1,num2)=>( num1+num2);


//Benefit of using parenthesis to return is when we want to return an object
// const addTwo=(num1,num2)=>({name:"rahul yadav"});
// console.log(addTwo(2,4));



//++++++++++++++++++++++++++++++++++++++++ IMPORTANT +++++++++++++++++++++++++++++++++++
/*
Main Difference between arrow function and regular function with (this)

this in Regular Functions:
-Depends on how the function is called.
-Can change based on the call context (e.g., method, standalone, new).

this in Arrow Functions:
-Inherits this from the surrounding scope where the arrow function is defined.
-Does not change based on how the function is called.

*/



const classroom = {
    teacher: 'Mr. Smith',
    introduce: function() {
        //console.log(this.teacher);   //here it will print 'Mr.smith' as this will refer to object
        const name= function(){
            console.log(this.teacher);  //with regular function inside another regular function (this) here returns undefined in non browser environment and in browser environment 
            //it returns undefined only
        }
        name();
    }
};
  
classroom.introduce();



//But when we use arrow function this problem is resolved 
const classroom2 = {
    teacher: 'Mr. Smith',
    introduce: function() {
        //console.log(this.teacher);   //here it will print 'Mr.smith' as this will refer to object
        const name= ()=>{
            console.log(this.teacher);  //with arrow function inside another regular function (this) here refers to lexical parent object only in non browser environment and in browser environment 
            //it also refers to same object
        }
        name();
    }
};
  
classroom2.introduce();