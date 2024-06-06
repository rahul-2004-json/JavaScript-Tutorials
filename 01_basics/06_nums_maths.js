const score = 400
// console.log(score);

const balance = new Number(100) //explicitly we tell to take it as number
// console.log(balance);

// console.log(balance.toString().length); //Once a number is converted to string 
// we can use functions of strings on it
// console.log(balance.toFixed(2)); //basically to tell upto how many digits to have after decimal

const otherNumber = 123.8966
//Priority in precision is given to values before decimal any value after that is round off
//Try on examples like 1112.3343,123.89 etc with precision 3 

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); converts in Indian number reperesentation system like 10,00,000
//toLocaleString basically converts in default format supported by browser.


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //gives number without sign
// console.log(Math.round(4.6)); //round off to closest 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   //gives number in range 0 to 1 
console.log((Math.random()*10) + 1);      // by this method we can shift range form o to 1   to 0 to 10  and to avoid getting 0.11 like values we add 1
console.log(Math.floor(Math.random()*10) + 1);  //add floor to above to get values like 6 7 not 6.777 8.99


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //important to generate in a min to max range with values >=min