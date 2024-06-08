// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//Important switch cases are used in redux implementation

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break; //if break is not written here then all code written below it will also be executed except the default 
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}