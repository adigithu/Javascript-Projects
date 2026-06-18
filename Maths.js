const num=400
const bal=new Number(200)  //This creates a Number object with the value 200.
console.log(bal) //[Number: 200]
console.log(bal.toString().length) //3

console.log(bal.toFixed(2)) //200.00    //The final value will have only decimal places

const c=23.4563
console.log(c.toPrecision(3))
//toPrecision(n) formats a number to n significant digits.
//It returns a string, not a number.


const d=1000000
console.log(d.toLocaleString('en-IN'))  //The value will be represented in indian standard
//toLocaleString() formats a number according to a country's numbering system.
//en-US: US Standard

/************* Maths *************/
console.log(Math) 
//Math itself is an object and has a number of properties 
console.log(Math.abs(-4))  //Always returns a positive value

console.log(Math.round(4.678))
console.log(Math.ceil(4.75))  //Highest value
console.log(Math.floor(4.75)) //Lowest value 
console.log(Math.min(4,3,6,2))

console.log(Math.random())  //Math.random() generates a random decimal number between: 0(inclusive) and 1(exclusive)
console.log((Math.random()*10)+1)
//Math.floor() removes decimals, (max - min + 1) ensures the maximum value is included
//and + min shifts the range to start from the minimum value.

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)  //Avoid 0 as value