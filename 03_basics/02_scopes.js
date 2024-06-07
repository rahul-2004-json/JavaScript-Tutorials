//We don't use var to decalre variables generally because it doesn't follow block scope 
//means its value once decalred inside a scope {} can be accessed outside the scope also

var c = 300
let a = 300
//the {} and everything written inside it should stay within it only and this is called as scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    c=30;

    
}

// console.log(a);
// console.log(b);
// console.log(c); output will 30 not 300 this is the de merit of var 

//Note : scope of browser and scope of node is different 


//Closures : A child can access the elements of parent but a parent can't ask for access of elements from child

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //can't access the element of child

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //can't access
}

// console.log(username); //can't access as out of scope






// ++++++++++++++++++ interesting ++++++++++++++++++

//There are two ways of declaring function 
//1 way

//By using 1st way of function declaration , if we try to run the function before declaration , it will work fine
console.log(addone(5)) 
function addone(num){
    return num + 1
}


//2nd way 
//But here as we are storing the function inside a expression , so calling function before its definition will produce errors
addTwo(5)
const addTwo = function(num){
    return num + 2
}