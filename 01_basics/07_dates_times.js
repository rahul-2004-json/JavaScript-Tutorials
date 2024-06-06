// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);                  //Datatype of date is object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  0 is month index 23 is date  and 5 3 is the time that we want to show it will come like 5:03:00
let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //gives current time but in milliseconds
// console.log(Math.floor(Date.now()/1000)); //conversion to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //usually getMonth() function gives month index starting from 0 we add 1 for our own convenience
console.log(newDate.getDay());  //not 0 based indexing

// `${newDate.getDay()} and the time `


//'default' here is internationalization we can choose any standard like american , Indian
newDate.toLocaleString('default', 
    //we can define here in object whatever we need
    {
    weekday: "long",
})