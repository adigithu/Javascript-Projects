//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.
//  Objects can be created using the Object() constructor or the object initializer / literal syntax.

//singleton (if we make objects through constructor) that is by Object.create
//object literals
const mysym=Symbol("key1") //Way of declaring symbol
const user={
    "full name": "Adu",  //In objects, we can define key-value pairs
    name: "Adi",
    [mysym]:"mykey1",  //Only if we use square brackets then it will be used as a symbol
    age: 18,
    location: "Odisha",
    email:"adi.com",
    isLoggedin: false,
    lastloginDays: ["mon", "tue"]
}
console.log(user.email) //adi.com
console.log(user["email"]) //adi.com
console.log(user["full name"]) //Adu

console.log(user.mysym) //mykey1
//But here mysym is not used as symbol in the above case
console.log(typeof user.mysym) //string when no square brackets are put in the symbol
console.log(user[mysym]) //mykey1

user.email="Adu.com"
// Object.freeze(user) //"No changes can further be made to the user object"
user.email="Oi.com"
console.log(user)

user.greeting=function(){
    console.log("Hi");
}
console.log(user.greeting) //It would return a function anonymous as reference as the function is not executed
console.log(user.greeting())


user.greeting1=function(){
    console.log(`Hello, ${this.name}`);
}
console.log(user.greeting1()) //Hello, Adi and also undefined
