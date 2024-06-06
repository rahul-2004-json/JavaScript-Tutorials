// array

const myArr = [0, 1, 2, 3, 4, 5]  //arrays can have any type of data within them ..even objects inside array are also possible
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //another way to define arrays
// console.log(myArr[1]);



// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //adds element in front of arrays but time consuming if array size bigger
// myArr.shift()  //deletes elements from front



// console.log(myArr.includes(9)); returns true if present in array otherwise false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  //bonds the array and returns in form of comma separated string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //slice doesn't do any changes to original array  interval is [1,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //splice interval is [1,3] and it removes this range of elements from original array also
console.log("C ", myArr);
console.log(myn2);