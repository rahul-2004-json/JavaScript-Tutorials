const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop expects a callback function that means function to be performed on each item it calls
//Note : Callback functions are always written without name and can be regular functions as well as arrow functions

//1.REGULAR FUNCTIONS callback
// coding.forEach( function (val){
//     console.log(val);
// } )

//2.ARROW FUNCTION CALLBACK
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

//3.Passing the reference of the function as callback 
// coding.forEach(printMe)


//forEach not only returns item but also the index and array so we can access them also 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




//Important When we have an array of objects that is coming from data base , how to traverse it?
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


//forEach loop will treat every object inside the array as item and then we can access their keys accordingly to our purpose
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )