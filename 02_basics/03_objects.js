//Objects can be declared in two ways one way is to decalre as literals and one way is to declare using literals

//Singleton : object made using constructor
// Object.create()  way to make object with constructor



//When object made with literals then it's not singleton
//Object literals
//Objects are generally combination of keys and values and values can be any datatype , even a object or array can be a value

//how to have symbols as keys in our object
const mySym= Symbol("key1");

const user={
    //Correct way to use symbols as key in objects
    [mySym]: "Namo Namo",


    name: "Rahul Yadav",
    email: "rahul123@gmail.com",
    phone: 99929292,
    age: 18,

    //This name will overwrite the previous name value
    name: "ravu",
    lastloggedin: ["monday","tues"],
    loggedin: true,


    //important
    "address to": "Havela valela",
}



//1 way to access values in object through keys
// console.log(user.name);
//2 way to access values in object through keys
// console.log(user["name"]);   //here keys are treated as strings only 
// console.log(user.lastloggedin);

//to access  "address to": "Havela valela",  we write like below
// console.log(user["address to"]); //there is no other way to access it 

//how to access the symbol key in object
// console.log(user[mySym]);


//How to change the value of particular key in object
// user["email"]="rahul4454@gmail.com";
// console.log(user);

//How to freeze the object to avoid any changes
// Object.freeze(user);   //freezes the object to avoid any changes


//How to add function to an object
user.greetme =function(){
    console.log(`Hello ${this.name} how are you doing`);    // Always use string interpolation `` instead of "" 
}


console.log(user);
console.log(user.greetme());  


