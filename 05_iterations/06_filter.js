//What is a callback function that foreach expects
//A call back function is any function that is passed as an argument to another function so that it can be executed in that function


const coding = ["js", "ruby", "java", "python", "cpp"]

//Here for each also expects a callback function 

// //This way will not work
// const codelang=coding.forEach((item) => {
//     return item; //the value is returned but to foreach only and it continues traversing the array 
// });

// console.log(codelang); // will give undefined foreach doesn't work like that 



//++++++++++++++++++++++++ Filter method in JS for arrays or objects  ++++++++++++++++++++++++++
// const newcod=coding.filter((item)=>{
//     return item===`java`;
// })

// console.log(newcod);



//To use above like functionality of filter with forEach then we will have to use another array to store our result
// const myNums=[12,3,4,5,6,7];

// const ans=[];

// myNums.forEach((items)=>{
//         if(items>7){
//             ans.push(items);
//         }
// })
// console.log(ans);




//Example of filter with array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//Not here as we write bk in our arrow function parameter we get access to each object inside the array and then we can do any operations on them
// const ansBook=books.filter((bk)=> bk.genre===`Science`);
// console.log(ansBook);
