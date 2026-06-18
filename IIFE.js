// Immediately Invoked Function Expression(IIFE)
//It is used because of mainly 2 reasons:
/*
1. Immediately execution of function
2. To avoid global scope pollution that is the pollution which happens from the declaration of global variables
*/
(function chai(){
    console.log("DB connected") //DB connected
})(); //We have to use the semicolon as we have stop the context 

//(): Inside it the function declaration would happen
//2nd (): The execution call to the given function

( function code () { //Named IIFE
    console.log("DB converted")
})();

( () => {
    console.log("Adi") //Adi
})();

((name) => {  //Unnamed IIFE
    console.log(`DB ${name}`);
})("Adi"); //DB Adi

//IIFE (Immediately Invoked Function Expression) is a function that is defined and executed
//immediately after its creation. It is commonly used to avoid polluting the global scope and to execute initialization code only once.

/*It is a function that is:

Defined
Executed immediately

at the same time.


function greet() {
    console.log("Hello");
}

is a function declaration.

To make it a function expression, we wrap it in parentheses:

(function() {
    console.log("Hello");
})

Then immediately invoke it:

(function() {
    console.log("Hello");
})();

IIFE with Parameters
(function(name) {
    console.log(`Hello ${name}`);
})("Aditya");

Output:

Hello Aditya

Arrow Function IIFE
((name) => {
    console.log(`Hello ${name}`);
})("Aditya");

Output:

Hello Aditya

Why Use an IIFE?
1. Avoid Polluting the Global Scope

Without IIFE:

let message = "Hello";

message exists in the surrounding scope.

With IIFE:

(function() {
    let message = "Hello";
})();

message exists only inside the function and cannot be accessed outside.

2. Execute Code Only Once
(function() {
    console.log("Database Connected");
})();

Useful for initialization/setup code.

(function() {
    console.log("First");
})();

(function() {
    console.log("Second");
})();

Notice the semicolon after the first IIFE.

Without it, JavaScript may throw an error because it can treat the second IIFE as a continuation of the first expression.

Breakdown of the Syntax
(function() {
    console.log("Hello");
})();
(function(){ ... }) → function expression
() at the end → immediately calls the function

