const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Not recommended way to write


//Recommended way to write the code : this is also called string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const str=new String("rahul yadav");
// console.log(str[0]);
//console.log(str.__proto__);  //proto is nothing but an object containing methods or functions

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(2));
// console.log(str.indexOf('t')); //if not found then return -1


// const newString = str.substring(0, 4) //generates substring from 0th index to 4th index
// console.log(newString);

/*
Difference between substring and slice method

The substring() method swaps its two arguments if indexStart is greater than indexEnd , 
meaning that a string is still returned. The slice() method returns an empty string if this is the case.
*/


// const anotherString = str.slice(-8, 4)  //-ve means start form end of the string
// console.log(anotherString);


const newStringOne = "   rahul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  //replace(searchvalue,replace value)

console.log(url.includes('sundar')) //returns boolean value if it contains the substring

console.log(str.split('-')); //this returns an array to us // can pass in the split(separator,limit)





