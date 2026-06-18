/* map() is an array method that:

Creates a new array by transforming each element of an existing array.

It does not modify the original array.

array.map((item) => {
    return transformedItem;
});

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

[2, 4, 6, 8]

const users = [
    { name: "Adi", age: 22 },
    { name: "Rahul", age: 25 }
];

const names = users.map(user => user.name);

console.log(names);

["Adi", "Rahul"]
*/

const a=[1,2,3,4,5,6,7,8,9,10]
const num=a.map((num) => num+10)
console.log(num)
/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//Chaining: We can use more than one method at once in a statement
let newnums=a.map((b) => b*10 ).map((item) => item+5) //The output of 1st map will be used for the 2nd map
console.log(newnums)
// [
//   15, 25, 35, 45,  55,
//   65, 75, 85, 95, 105
// ]

newnums=a.map((b) => b*10 ).map((item) => item+5).filter((num) => num > 45)
console.log(newnums) //[ 55, 65, 75, 85, 95, 105 ]
//The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array,
// and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements
// which do not pass the callbackFn test are not included in the new array.
