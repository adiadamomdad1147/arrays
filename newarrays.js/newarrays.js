const myArray = [0, 1, 2, 3, 4, 5, 6,]
console.log(myArray[4]);

 myArray.push(7)
 console.log(myArray);

 myArray.concat(8)
 console.log(myArray);

 myArray.pop()
 console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(1)
console.log(myArray);
myArray.shift()
console.log(myArray);

const newArray = myArray.join()
console.log(newArray);

console.log("A", myArray);
const myn1 = myArray.slice(4, 6)
console.log(myn1);

const myn2 = myArray.slice(2, 5)
console.log(myn2);

const marvel_heros = ["spiderman", "ironman", "hulk"]
const dc_heros = ["superman", "batman", "naagraj"]
const all_heros= [...marvel_heros, ...dc_heros]

console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9,[4, 5]]
const realanother_array = another_array.flat(Infinity)
console.log(realanother_array);
console.log(Array.from("Aditya singh"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));