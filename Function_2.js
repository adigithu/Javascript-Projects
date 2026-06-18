//this keyword refers to the current context like to access all the variables inside a given scope, we use this keyword
const user={ 
    name:"adi",
    price:999,
    welcomwmsg: function(){
        console.log(`${this.name}, welcome`)
        console.log(this)
    }

}
user.welcomwmsg() //adi, welcome
//{ name: 'adi', price: 999, welcomwmsg: [Function: welcomwmsg] }
user.name="Hi" //Here context means we are referring to the present values
user.welcomwmsg() //Hi, welcome
//{ name: 'Hi', price: 999, welcomwmsg: [Function: welcomwmsg] }
console.log(this) //{}

//In browser, when we do this console.log(this), we are referring to the Window object
//But in node environment, we refer to {} empty object when we do console.log(this)

function one(){
    console.log(this)
}
one() //We will get global values

function two(){
    let name="adi"
    console.log(this.name) //undefined
}
two()
//this keyword can only be used in objects and not inside functions as in functions we get undefined

//Arrow functions

// const chai=function(){
//     let name="adi"
//     console.log(this.user); //undefined
// }
// chai()

const chai=() => {
    let name="adi"
    console.log(this.user); //undefined
}
chai()

const addTwo=(n1,n2) => {
    return n1+n2
}
console.log(addTwo(3,4)) //7
const add=(n1,n2) => n1+n2 //Implicit Return: Here we don't use {} and return keyword as it is one-line statement
console.log(add(2,4)) //6

const a=(n1,n2) => (n1+n2)
console.log(a(4,5)) //9
//If we use curly braces, then we have to use the return keyword but not in case if we are using only ()
//Explicit return: When we use return

const three=(num1, num2) => ({user: "Adi"}) //For an object to return, it needs to be wrapped within {} and () inside in a function
console.log(three(4,5)) //{ user: 'Adi' }

//this refers to the current object that is executing the code.
/*
In Node.js, this refers to the global object.
Output:

undefined

Why?

Because this does not refer to local variables inside a normal function.

Arrow functions do not have their own this.

They inherit this from the surrounding scope.
this is a special keyword that refers to the object that is currently executing the function.
Inside an object method, this refers to that object. In regular functions,
this depends on how the function is called, while arrow functions do not have their own this and inherit it from their surrounding scope.
In a browser:

Window {...}

because the global object is window.
*/