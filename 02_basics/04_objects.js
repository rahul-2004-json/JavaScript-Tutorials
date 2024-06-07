//What does singleton mean ?
/*
A singleton pattern is a design pattern that ensures that only one instance of a class can exist in the entire program. 
This means that if you try to create another instance of the class, it will return the same instance that was created earlier.
*/

// const tinderUser = new Object();  //Creates a singleton object 
// console.log(tinderUser); 



const myUser ={} //Object made with literals are not singleton

myUser.phone=9579759347;
myUser.name="rahul";


// myUser.fullname ={
//     userFullname: {
//         "first name":"rahul",
//         "last name":"yadav"
//     }
// }

//extreme level of nesting
myUser.fullname ={
    userFullname: {
        "first name": {
            "name":"rahul",
        },
        "last name":"yadav"
    }
}

// console.log(myUser);

//how to access the nested object
// console.log(myUser.fullname.userFullname["first name"]);
//when extreme level of nesting
// console.log(myUser.fullname.userFullname["first name"]["name"]);



//How to combine objects with eachother
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//1st way : Bad method
// const obj3 = { obj1, obj2 }    //Problem we get object inside another object
// console.log(obj3);


//2nd way : Good but not used much
// const obj3 = Object.assign({}, obj1, obj2, obj4)    //does the job well 
//Note : Here use of {} is a good practice as it ensures that after combining our answer gets into the target which is {}.
// console.log(obj3);

//3rd way : Best way is to use spread operator ...
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);




//When we get some data from backend in the form of arrays of object
const data=[
    {
        id:1,
        name:"rahul"

    },
    {
        id:2,
        name:"ravi"

    },
    {
        id:3,
        name:"randy orton"

    }
]

//How to access the values in above data
//Remember it's an array so use first index to reach that object then use .operator
// console.log(data[0].name);
// console.log(data[2].id);


//How to get all the keys by using function
// console.log(Object.keys(myUser));   //output will be array of key where keys are in string datatype
// console.log(Object.values(myUser));  //output will be array of values with their respective datatype

//Gives all the entries present inside the array in form of array of arrays , where each array element consists of keys and values
// console.log(Object.entries(myUser));


//To save our backend from crashing we use the following function to check whether a particular keys value is present or not
console.log(myUser.hasOwnProperty("name2"));




// +++++++++++++++++++++++++++++++++ Object Destructure and JSON API intro ++++++++++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//Writing like course.price at every place is not good practice thus we use object destructring.


//Object destructring
// just write what you want to be destructred  = object name 
const {price:p}=course;
console.log(p);



//Destructring in react
//here instead of using props.company we destructure it directly and use it
const navbar= ({company})=>{

}
navbar(company="ABC");




//API: (Application programming interface) is any work that we have outsourced to someone else to complete it
//Previously the data used to come in xml format 
//But now we use JSON
//JSON : JavaScript Object Notation


//JSON is like an object but with no name 
//Here keys are always string and values are string  mostly but can be boolean or number
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


