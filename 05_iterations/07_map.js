const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Map is a method of array it creates a new array by calling a function on each element of the array and stores the result in new array
//It returns value by default

// const newarr=myNumers.map((items)=> items+10);

// console.log(newarr);


//Chaining of methods is also allowed in javascript
const newarr=myNumers
            .map((items)=> items+10)
            .map((items)=>items*2)
            .filter((items)=>items >32);

            console.log(newarr);