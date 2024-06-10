//Reduce method in js 
//Mainly used when we have a cart and we want the total of prices of all the items within the cart without separating them

//it takes two parameters accumulator and curr value in the call back function
//The accumulator should be given with initial value to carry on
// in the end it returns the accumulated value as answer to us

const myNewnums=[1,2,3,4];

// //By regular function 
// const ans=myNewnums.reduce(function(accumulator,currvalue){
//     return accumulator+currvalue;
// },0) //0 is passed here to reduce function parameter as initial value for accumulator

// console.log(ans);


//By arrow function
//single line statements are always returned automatically
// const ans=myNewnums.reduce((acc,curr)=>acc+curr,0);
// console.log(ans);





//If we need to find the total price of all items of this shopping cart , which is stored in our backend then
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//Simply access all the objects in the array as we did previously and using .operator take any key and it's value and add it to the accumulator 
const ans=shoppingCart.reduce((acc,items)=>acc+items.price,0);
console.log(ans);


