/*
JS has by default prototype behaviour and if it does not know something it goes into higher layers till it gets the information

In js, array is an object. Object does not have any parent that is it has it's own properties and it's prototype is null
*/

function mul(num){
    this.num=num  //It is stored in the mul.prototype
    return num*5
}
mul.power=2
console.log(mul(5)) //25
console.log(mul.power) //2
console.log(mul.prototype) //{} and it by default sets up some contexts. .prototpye gives some methods as well as some internal properties

//Function is also an object in JS

function create(username, score){
    this.username=username
    this.score=score
}

create.prototype.increment=function(){
    this.score++   //Who ever has called it, do their work
}

create.prototype.printMe=function(){
    console.log(`Score is ${this.score}`)
}
const a= new create("Adi", 45) // Without new we cannot read properties of undefined (reading 'printMe')
const b=new create("Boi", 25)

a.printMe() //Score is 45

/* 
A new object is created: The new keyword initiates the creation of a new JS object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to
properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit
return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value.

The prototype is linked with the constructor and the constructor is called and everything associated with this keyword is returned in the newly created object

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.

*/

let myname="Adi   "
console.log(myname.length) //6
console.log(myname.truelength) //undefined
console.log(myname.trim().length) //3

let myHeros=["thor", "Iron"]
let heroPower={
    thor: "Hammer",
    Iron: "sling",
    getSpider: function(){
        console.log(`Spidy is ${this.Iron}`)
    }
}
Object.prototype.aditya=function(){
    console.log('Adi is present in all objects')
}
heroPower.getSpider()
heroPower.aditya() //Adi is present in all objects

myHeros.aditya() //Adi is present in all objects

Array.prototype.Hello=function(){
    console.log('Aditya said hello')
}

// myHeros.Hello()
// heroPower.Hello() //heroPower.Hello is not a function

//Inheritance

const user={
    name: "Chai",
    email:"Aditya@gmail.com"
}

const teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true
}
teacher.__proto__ = user  //Teacher can use all the properties of user object


//Modern Syntax

Object.setPrototypeOf(TeachingSupport, teacher)  //TeachingSupport inherits the properties of teacher

let uname="Hello "
String.prototype.truelength=function(){
    console.log(`${this}`) //Hello (because uname has the reference of truelength) 
    console.log(`${this.name}`) //Undefined
    console.log(`True length is ${this.trim().length}`); //5
}
uname.truelength()
"Aditya".truelength() 
/*Aditya
undefined
True length is 6
*/

