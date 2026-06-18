//Primitive datatypes and non-primitive datatypes
//These are divided into 2 types on the basis of the data is stored and accessed

//Primitive: These are of 7 types and these are call by value that is we do only copy the value and not the reference of the
//memory

//1. String 2. Number 3. Boolean 4. Null  5. Undefined  6. Symbol(To make a value unique) 7.BigInt (Scientific and large values)

//Reference (Non Primitive): The references of those values are being allocated here

// 1. Array  2. Objects 3. Functions

// IS JS A DYNAMICALLY TYPED LANGUAGE?
/* Ans: JavaScript is a Dynamically Typed Language ✅

This means:

You do not need to declare the data type of a variable explicitly. JavaScript determines the type at runtime.
*/

let userdefined=undefined

//Symbol
//A Symbol creates a unique identifier.
const id =Symbol('123')
const anoID=Symbol('123')
console.log(id === anoID)

//Even though both symbols have the same description '123', each call to Symbol() creates a new unique value.
//They are mainly used to create unique object property keys so that properties don't accidentally clash.

const bi=32879327983092380n //n denotes bi is a big int

const hero=['a','b'] //array

//Objects
let my=
{
    name:"Adi",  //objects
    age:22,      //objects
}

//function

const myfunc=function(){
    console.log("adi")
}
myfunc()

console.log(typeof bi) //bigint
//Type of null is object
console.log(typeof myfunc) //fucntion  But it is called function object
console.log(typeof hero) //object
console.log(typeof my) //object

//Array: An array is used to store multiple values in a single variable. Think of an array as a list of items.
//Objects: An object stores data in key-value pairs. Think of an object as a real-world entity with properties.
//Functions: A function is a block of code that performs a specific task and can be reused.

//Stack and Heap Memory

//Stack memory is used in Primitive Data Types.
//Heap memory is used in non-Primitive Data Types.

//In stack memory, we only get the copy of the value of the variable.
//In heap memory when defined in non-primitive datatypes, we get reference of the original value which is stored in the variable.
//Example of Stack
let my_channel="Adi.com"
let you=my_channel
console.log(you)
you="Oi"
console.log(you)
console.log(my_channel)

//Example of Heap
let user={
    email:"adi@gmail.com",
    upi:"user@ybl"
}
let user1=user
user1.email="we"
console.log(user.email) //we

/*JavaScript stores data in two types of memory:

Stack Memory
Heap Memory
Primitive types are copied by value.
The variable itself stores a reference (address) in the stack.
Both variables point to the same object, so changing one affects the other. 
Non-primitive types are copied by reference.

JavaScript stores primitive data types in stack memory and non-primitive data types (objects, arrays, functions) in heap memory. 
Primitive values are copied by value, so changes to one variable do not affect another. Non-primitive values are copied by reference,
 meaning multiple variables can point to the same object in heap memory, and changes through one reference are visible through the others.

*/