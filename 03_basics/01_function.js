function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//if we write only saMyName then it is function reference
// sayMyName() if we write like this then it is function execution  

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


//console.log just prints doesn't not returns any output
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    //if username is not defined then execute the following code but if we have given default value then this doesn't executes
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

//if we don't give any value inside argument then our parameter in function will take it as undefined , hence we should provide default values also
// "" this is also considered as undefined
// console.log(loginUserMessage())





//In Ecommerce application where there is implementation of cart functionality we may have a case where user keeps on inserting new items inside the cart and we don't know the exact
// number upto which user will insert - in these cases we use rest operator(...)
//this ...rest operator will store the values in array for us
function additemstocart(...num1){
    return num1;
}

// console.log(additemstocart(200,400,450,670));


//Important case of rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
//in above function val1=200 and val2=400 and remaining value will be handled through ...rest operator we will get num1 as [500,2000] returned 
// console.log(calculateCartPrice(200, 400, 500, 2000));



//How to handle objects inside function 
const obj ={
    username:"Rahul",
    prices:900
}

//Error in such type of object handling may occur when the object datatype is not passed or key is not existing
//In such cases TypeScript is used becasue there type safety is automatically done
function handleobject(anyobject){
    console.log(`Hi! ${anyobject.username} Guten Morgen! Price for Potato is ${anyobject.prices}`);
}

// handleobject(obj);

//We can directly pass the object inside the function call also
handleobject({
    username:"Ramu Gopal",
    age:10,
    prices:100
})



//Handling array with function call
const arr=[100,200,43,5445];

function handleArray(myarray){
    console.log(myarray[1]);
}

// handleArray(arr);
//We can also directly pass in the array to function call
handleArray([12,232,2434,55]);