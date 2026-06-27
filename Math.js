console.log(Math.PI) //3.141592653589793
Math.PI=5
console.log(Math.PI) //3.141592653589793

const obj=Object.getOwnPropertyDescriptor(Math, "PI") //Gets the own property descriptor of the specified object. An own property descriptor is one
//that is defined directly on the object and is not inherited from the object's prototype.
console.log(obj)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const a={
    name:"Aditya",
    price:200,
    isAvailable:true,
    order:function(){
        console.log("Over")
    }
}
console.log(a) //{ name: 'Aditya', price: 200, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(a)) //undefined
console.log(Object.getOwnPropertyDescriptor(a, "name")) //undefined //a is the object and name is the property
/*
{
  value: 'Aditya',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
// Object.defineProperty(a, "name", {writable: false, enumerable: false})
// console.log(Object.getOwnPropertyDescriptor(a, "name"))
/*
{
  value: 'Aditya',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
for (let [key,value] of Object.entries(a)) {
    console.log(`${key}: ${value}`)
} //a is not iterable when we give only [key,value] of a 

/*
name: Aditya
price: 200
isAvailable: true
*/
for (let [key,value] of Object.entries(a)) {
    console.log(`${key}: ${value}`)
}
/*
name: Aditya
price: 200
isAvailable: true
order: function(){
        console.log("Over")
    }
*/
for (let [key,value] of Object.entries(a)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}
/*
name: Aditya
price: 200
isAvailable: true


if suppose we set enumerable:false in the define property then while iterating the "enumerable" property won't be iterable
*/