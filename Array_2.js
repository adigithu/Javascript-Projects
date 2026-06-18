const hero=["thor", "ironman", "spiderman"]
const dc=["super", "bat", "flash"]
hero.push(dc)
console.log(hero) //[ 'thor', 'ironman', 'spiderman', [ 'super', 'bat', 'flash' ] ]
console.log(hero[3][1]) //bat
const hero1=["thor", "ironman", "spiderman"]
const a=hero1.concat(dc) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(a) // [ 'thor', 'ironman', 'spiderman', 'super', 'bat', 'flash' ]

const all=[...hero1,...dc]  //The ... is called the Spread Operator in JavaScript.
console.log(all)  //[ 'thor', 'ironman', 'spiderman', 'super', 'bat', 'flash' ]
//The spread operator spreads (unpacks) the elements of an array.
//Because it spreads out the contents.

/* Other uses
1. To copy
 const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);  // [1, 2, 3]

2. Adding elements
const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr2);

Output: [1, 2, 3, 4, 5]

*/
const b=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const my=b.flat(Infinity)
console.log(my) //[
//  1, 2, 3, 4, 5,
//  6, 7, 6, 7, 4,
//  5
//]
/* Array.from() converts:

Array-like objects (objects with a length property)
Iterable objects (arrays, strings, sets, maps, etc.)
*/
console.log(Array.isArray("Adi")) //false
console.log(Array.from("Adi")) //[ 'A', 'd', 'i' ]
console.log(Array.from({name: "Adi"})) //[] as the object is not iterable

let score1=100
let score2=200
console.log(Array.of(score1,score2))  //Returns a new array from a set of elements.
//[100,200]