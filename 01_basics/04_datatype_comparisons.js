// There is no problem in comparisons between Number to Number
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//Here when we compare with different datatype then here string gets
// converted to number
// console.log("02"<1);
// console.log("-1"<1);

//Working of both > >= < <= is different from ==
//comparison operators like  > >= < <= convert null to 0 then do comparison
// console.log(null > 0);   // 0>0 false
// console.log(null == 0);  //false  different conversion
// console.log(null >= 0);  //  0>=0   true



//Undefined comparison with any comparator will give false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// === it is a strict check it compares actual value with datatype also  

console.log("2" === 2);   //false because "2" is string in datatype although actual value is same
