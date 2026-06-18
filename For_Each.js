//For each loop

/*forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
Performs the specified action for each element in an array.
*/

const coding=["js", 'ruby', "Python"]
coding.forEach( function (item) {
    console.log(item)
} )
// js
// ruby
// Python

//Callback function does not have a name and it will fetch all the elements as parameters from the array
//This function runs inside the array so it will take the values from the array as parameter
coding.forEach( (item) => {
    console.log(item)
})

// //js
// ruby
// Python

function printMe(item){
    console.log(item)
}
coding.forEach(printMe) //Here we have to give the reference of the given function

// js
// ruby
// Python

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

// js 0 [ 'js', 'ruby', 'Python' ]
// ruby 1 [ 'js', 'ruby', 'Python' ]
// Python 2 [ 'js', 'ruby', 'Python' ]

const code=[{
    name:"Adi",
    roll:"1"
},
{
    name:"Gelhu",
    roll:30
},
{
    name:"Falesh",
    roll: 19
}]

code.forEach((item) => {
    console.log(item)
})
// { name: 'Adi', roll: '1' }
// { name: 'Gelhu', roll: 30 }
// { name: 'Falesh', roll: 19 }

code.forEach((item) => {
    console.log(item.name)
})

// Adi
// Gelhu
// Falesh


/*
1. for...of Loop

Used to iterate over values of iterable objects like arrays, strings, maps, sets, etc.

Array Example
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}

Output:

10
20
30

Here value gets the actual array values.

2. for...in Loop

Used to iterate over keys (property names) of an object.

Object Example
const user = {
    name: "Adi",
    age: 22
};

for (const key in user) {
    console.log(key);
}

Output:

name
age

Get Both Key and Value
for (const key in user) {
    console.log(key, user[key]);
}

Output:

name Adi
age 22


Array with for...in
const arr = [10, 20, 30];

for (const index in arr) {
    console.log(index);
}

Output:

0
1
2

Notice it gives indexes, not values.

3. forEach()

forEach() is an array method used to execute a function for each array element.

Example
const arr = [10, 20, 30];

arr.forEach(function(item) {
    console.log(item);
});

Output:

10
20
30
Arrow Function Version
arr.forEach((item) => {
    console.log(item);
});
Access Value, Index, Array
const arr = ["thor", "ironman", "spiderman"];

arr.forEach((item, index, array) => {
    console.log(item, index);
});

Output:

thor 0
ironman 1
spiderman 2

Parameters:

(item, index, array)
Key Differences
Loop	        Works Best With	                            Gives
for...of	    Arrays, Strings, Sets, Maps	                Values
for...in	    Objects	                                    Keys
forEach()	    Arrays only	                                Values (via callback)
Example Comparison
const arr = ["A", "B", "C"];
for...of
for (const value of arr) {
    console.log(value);
}

Output:

A
B
C
for...in
for (const index in arr) {
    console.log(index);
}

Output:

0
1
2
forEach()
arr.forEach((value) => {
    console.log(value);
});

Output:

A
B
C
Interview Shortcut
for...of → values
for...in → keys/indexes
forEach() → array method that runs a callback for every element
Easy Memory Trick
for...of  → OF values
for...in  → IN keys
forEach   → For every array element

*/