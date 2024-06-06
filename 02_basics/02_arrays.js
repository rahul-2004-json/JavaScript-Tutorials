const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // pushes an array inside another array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   //concat helps in concating the two arrays without pushing another array in nested way
// console.log(allHeros);     ["thor", "Ironman", "spiderman","superman", "flash", "batman"]


//... is a spread operator : this helps in concatinating the two arrays by breaking them element wise and then concatinating them
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //flat function automatically removes any infinite level of nesting present inside the array
//usually in place of infinity we write the depth of flatness we need 
console.log(real_another_array);



console.log(Array.isArray("rahul"))   //returns false 
console.log(Array.from("rahul"))      // gives output ['r','a','h','u','l']
console.log(Array.from({name: "hitesh"})) // interesting   , this gives output as [] because not specified ,whether we want array of keys or array of values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //makes arrays from 3 variables using of function