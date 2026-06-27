// Javascript and classes
// JS does not have classes
// JS is primarily a prototype-based language and it's classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms.

//Objects
//-- Collection of properties(variables) and methods (functions)

// toLowerCase, Promise - Objects

/*
Constructor function
Prototypes
Classes
Instances (new, this)

4 pillars of OOPS: 
1. Abstraction: The underlying mechanism of any occurring process is hidden
2. Encapsulation: It wraps up the data and methods
3. Inheritance
4. Polymorphism: A method can behave differently depending upon the context
*/

const user = { // An example of object literal
    username: "adi",
    logincount: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details")
        console.log(`Username: ${this.username}`) //Username: adi
        console.log(this) //{
//   username: 'adi',
//   logincount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
    }

}
console.log(user.username)
console.log(user.getUserDetails())
console.log(this) //{}

// CONSTRUCTOR FUNCTION

const date =new Date()  //This constructor function allows us to make multiple instances from a single object and this "new" keyword helps us to make a
//new contest

function User(username, loginCount, isLoggedIn){
    this.username = username   //this.username refers to the variable. So, this is an object
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Username is ${username}`)
    }

    return this
}
const userOne=User("Adi", 12, true)
console.log(userOne)

/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter],
  username: 'Adi',
  loginCount: 12,
  isLoggedIn: true
}
*/
const userTwo=User("Boi", 11, false) //Now the values will be overwrite even if it we are not printing it

//Constructor function makes a new instance or copy and the original does no gets affected from it

const userTwo= new User("Boi", 11, false)
const userone= new User("Adi", 12, true)

//Each both will have new unique values
 //Even if we do not use return this, it is implicitly defined and so it will be returned

//NEW

/*1. Whenever we use a "new" keyword, an empty object is created and it is called instance. {}
2. Now a constructor function is called due to the new keyword and all the arguments are packed into this
3. all arguments are put into the this keyword
4. All arguments are returned
*/

console.log(User.constructor) //The initial value of Object.prototype.constructor is the standard built-in Object constructor.
//[Function: User]

//Constructor is a reference of itself
/* 
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true7