//for in loop is used to traverse in object as well array
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//Traverses over keys only
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
//if we traverse over the arrays then we will get its keys or index only like 0,1,2,3.. then we will have to use keys like below to print the element at that key
for (const key in programming) {
    //console.log(programming[key]);
}



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//Nothing will be printed here ..as maps are not iterable with for in loop
// for (const key in map) {
//     console.log(key);
// }