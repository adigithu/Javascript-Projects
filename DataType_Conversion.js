let score="34"
console.log(typeof (score));   //Type Conversion: It is the process of converting from one data type to another

let valueNum=Number(score)
console.log(typeof valueNum); //number


let a="33abc"
valueNum=Number(a)
console.log(typeof valueNum) //JavaScript does not allow redeclaration of a let variable in the same block.
console.log(valueNum)   //NaN

/* Null would be an object and converted to 0
Undefined would be undefined and converted to NaN
Boolean true would be converted to 1

Empty string if converted to boolean would give false
Name in string if converted to boolean would give true
*/


//***************      Operations *****************/
console.log(2**2)  //4
let str="Hello"
let str2=" Adi"
a=str+str2
console.log(str+str2)

console.log("1" +2 +2)//122
console.log(1+2+"2") //32

console.log(true)//true
console.log(+true)//1
console.log(+"")//0

let num1, num2
num1=num2=2+2
console.log(num1)  //4

/* Prefix and postfix in JS

The increment (++) operator increments (adds one to) its operand and returns 
the value before or after the increment, depending on where the operator is placed.
*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.
