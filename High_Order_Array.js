// for of
//["","",""]
/* The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections),
 as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/
const arr=[1,2,3,4,5]
for (const num of arr) { //Objects, arrays and strings are iterators, so loop can be used on them
    console.log(num) // 1 2 3 4 5
}
const greetings="HelloWorld!"
for (const n of greetings) {
    console.log(`Each character is ${n}`) //Every character of greetings
}

//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.
//A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs
// — a for...of loop returns a 2-member array of [key, value] for each iteration.


//Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
const map = new Map()
map.set('IN',"India")
map.set("USA", 'America')
map.set("OD", 'Odisha')
console.log(map) //Map(3) { 'IN' => 'India', 'USA' => 'America', 'OD' => 'Odisha' }

//Map preserves the order and the duplicate values in it is not allowed

for (const element of map) {
    console.log(element) 
}
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'OD', 'Odisha' ]

for (const [i, j] of map) {   //i: Key and j: Value
    console.log(i, ":", j) 
}

// //IN : India
// USA : America
// OD : Odisha

// const obj={
//     'Game':"NFS",
//     "Game1":"Hi"
// }
// for (const [i,j] of obj) {
//     console.log(i, ":", j) //Here it will lead to object not iterable
// }

const my={
    js:"JS",
    cpp:"C++",
    rb:"Ruby"
}
for (const key in my) {
    console.log(key)
}
// js
// cpp
// rb
for (const key in my) {
    console.log(`${key} shortcut for ${my[key]}`)
}
// js shortcut for JS
// cpp shortcut for C++
// rb shortcut for Ruby

const ar=["1", "2", "3"]
for (const key in ar) {
    console.log(key)    
} // 0 1 2
//For in loop returns the by default indexes 

for (const key in ar) {
    console.log(ar[key])    
} // 1 2 3

// const map = new Map()
// map.set('IN',"India")
// map.set("USA", 'America')
// map.set("OD", 'Odisha')
// console.log(map) 

for (const key in map) {
    console.log(key) //No output
}
// We cannot do iteration in maps using for in loop
