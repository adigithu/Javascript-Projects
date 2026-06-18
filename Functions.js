/* A JavaScript function is a reusable block of code designed to perform a specific task. 
It eliminates repetitive code, takes inputs, processes logic, and returns an output.

//In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions,
and assigned to variables and properties. They can also have properties and
methods just like any other object. What distinguishes them from other objects is that functions can be called.

A programming language is said to have First-class functions when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, can be returned by
another function and can be assigned as a value to a variable.

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces, { /* … }.
*/

function hi(){
    console.log("A");
    console.log("B");
}
hi()  // hi is the reference of the function and hi() executes it. The () tells the JS to execute the function 

function add(num1, num2){      //num1 and num2 are parameters(The variables which we mention during the function definition)
    console.log(num1+num2) //9
}
add(4,5) //4 and 5 are arguments (The values which we pass to the function definition)
add(3,"4") //It will convert 3 into a string and will return 34 as string
add(3,null) //It will return 3

const res=add(3,2)
console.log("Result:", res) //Result: undefined

function a(n1,n2){
    let result=n1+n2
    return result
}
console.log(a(5,6)) //11

function b(username="sam"){  //It will take the sam as value iof we do not send any arguments to the function definition
    if(!username){
        console.log("Enter valid name")
    }
    return `${username} logged in`
}
console.log(b("Adi")) //If we do not send any values to the function's parameters then we will get undefined

function cal(num1){
    return num1
}
console.log(cal(200,300)) //Only 200 will be returned

function cal1(...num1){  //Rest operator will take multiple arguments and will return the arguments gouped in an array
    return num1
}
console.log(cal1(200,300, 400)) //[ 200, 300, 400 ]

function cal2(val1,val2,...num1){ 
    return num1
}
console.log(cal2(200, 400, 300, 400)) //[ 300, 400 ]

const user={
    username:"Adi",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)  //Username is Adi and price is 199

handleObject({
    username: "hi",
    price:200
}) //Username is hi and price is 200

const arr=[200,300,400]
function returnsecond(getarray){
    return getarray[1]
}
console.log(returnsecond(arr)) //300
console.log(returnsecond([20,10])) //10
console.log(returnsecond([20])) //undefined

//Rest Operator → Packs values into an array 📦
//Spread Operator → Unpacks values from an array 📂
//The rest operator collects multiple values into a single array.

/*Why Use Rest Operator?

When you don't know how many arguments will be passed.

Rest (Collects)
function demo(...nums) {
    console.log(nums);
}

Output:

[1, 2, 3]
Spread (Expands)

const arr = [1, 2, 3];

console.log(...arr);

Output:

1 2 3

A function expression is a function that is stored in a variable.
const greet = function() {
    console.log("Hello");
};
function() { ... } → function definition
greet → variable that stores the function

Why Use Function Expressions?

Because functions in JavaScript are first-class citizens, meaning they can be:

Stored in variables
Passed as arguments
Returned from other functions

    