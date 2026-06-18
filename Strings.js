const name="adi"
const age ='18'
console.log(name+age+" we ")

console.log(`My name is ${name} and my age is ${age}`) //String interpolation

/* Backticks ( ) are used to create template literals in JavaScript. Template literals allow string interpolation, where variables 
or expressions can be embedded inside a string using ${}. This makes string creation more readable and supports multiline strings.

A template literal is simply a special way of creating strings using backticks ( ) instead of single (') or double (") quotes.
*/

const a=new String("Adi")  //The characters inside it will be indexed and we can apply different methods to the string
console.log(a)  //[String: 'Adi']
console.log(a[0]) //A
console.log(a.__proto__) //{}
console.log(a.length) //3
console.log(a.toUpperCase())  //ADI but original string will not change
console.log(a.charAt(2))   //i      //charAt tells us that at a given index which character is there
console.log(a.indexOf('d'))  //1    //It returns the index at which the given character is present
const b=a.substring(0,2) //Start,stop
console.log(b) //Ad
const c=a.slice(-3, 2) //Here we can give negative values but not in case of substring
console.log(c) //Ad

const ab=" Adi "
console.log(ab)
console.log(ab.trim()) //It removes the trailing and leading spaces from the given string
//Trim works on white space plus terminators
const url="https://adi.com"
console.log(url.replace('.com', 'o')) //https://adio

console.log(url.includes('adi')) //true   It will check if a given string is present in the given string or not
 //Split uses separator and limit

const d="Adi@Oi@com"
console.log(d.split('@', 1)) // [ 'Adi' ]         //IT will split till the first @ and returns only that string
console.log(d.split('@')) //[ 'Adi', 'Oi', 'com' ]
/*A non-negative integer specifying a limit on the number of substrings to be included in the array.
//  If provided, splits the string at each occurrence of the specified separator,
//  but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

separator
The pattern describing where each split should occur. Can be undefined, a string, or an object with a 
Symbol.split method — the typical example being a regular expression.
 Omitting separator or passing undefined causes split() to return an array with the calling string as a single element.
*/