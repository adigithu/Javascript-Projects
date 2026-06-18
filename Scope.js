 //It has block scope issues
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a) //a is not defined 
// console.log(b) //b is not defined
// console.log(c) //30 as it has block scope issue
 //Shift+Alt+pg down

//{}:- These curly braces denote scope but in objects it is used for object declaration

//We have different global scope in node environment and web browser console.

function one(){
    const user="hitesh"
    function two(){
        const web="YT"
        console.log(user) //hitesh
    }
    // console.log(web) //Not defined
    two()
}
one()

//Closure is related to DOM
//Child function have access to the variables of parent functions but vice-versa is not true

if(true){
    const user="adi"
    if(user==="adi"){
        const web="YT"
        console.log(user + web); //adiYT
    } 
    // console.log(web) //Error
}
// console.log(user) //Error

function add(num){ //  Function declaration
    return num+1
}
add()


const add1=function(num){
    return num+2
}
add1(5)



add1(5)
const add1=function(num){  //Function expression //It will throw an error as we cannot access function add1 before initialization
    return num+2
}

//Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.
//This means JavaScript "knows about" variables and functions before it reaches their declaration in the code.
//Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase.
//Function declarations are fully hoisted, while var variables are hoisted and initialized
//with undefined. let and const are hoisted but cannot be accessed before their declaration due to the Temporal Dead Zone (TDZ).

/* Function declarations are fully hoisted.

Before execution, JavaScript already knows:
So when it sees:
the function already exists and runs successfully.

A function declaration is fully hoisted, so it can be called before it appears in the code.
 A function expression is assigned to a variable (const, let, or var), and the variable must be initialized before it can be used.
 Therefore, calling a function expression before its declaration results in an error, while a function declaration works correctly.


//Example of function expression not hoisted
greet();

const greet = function() {
    console.log("Hello");
};

Output:

ReferenceError

❌ Doesn't work because greet is a const variable that hasn't been initialized yet.

A function expression is a function that is assigned to a variable. Unlike function declarations,
function expressions are not fully hoisted and cannot be called before the variable is initialized.
*/
