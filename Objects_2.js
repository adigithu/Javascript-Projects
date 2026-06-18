//onst tinder= new Object() //singleton object

const tinder={} //non-singleton object
tinder.id="123"
tinder.name="adi"
tinder.isloggedIn=false
console.log(tinder) // { id: '123', name: 'adi', isloggedIn: false }

const a={
    email: "adi.com",
    fullname: {
        uname: {
            firstname: "adi",
            lastname: "parida"
        }
    }
}
console.log(a.fullname) //{ id: '123', name: 'adi', isloggedIn: false }
//                        { uname: { firstname: 'adi', lastname: 'parida' } }
console.log(a.fullname.uname.firstname) //adi

const b={1: "a", 2: "b"}
const c={3: "c", 2: "d"}
const d={b, c}
console.log(d)  //{ b: { '1': 'a', '2': 'b' }, c: { '2': 'd', '3': 'c' } }
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj=Object.assign(b,c) // Here the b object would be the target object and b and c would be merged into b
console.log(obj) //{ '1': 'a', '2': 'd', '3': 'c' }

const obj2=Object.assign({}, b,c)    //{} is the target object and b and c will be merged into a new object
const e={...b,...c} //{ '1': 'a', '2': 'd', '3': 'c' }
console.log(e)

const users=[
    {
        id:1,
        email:"adi.com"
    },
    {

    }
]
console.log(users[0]) //{ id: 1, email: 'adi.com' }
console.log(users[0].id) //1

console.log(Object.keys(tinder)) //[ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinder)) //[ '123', 'adi', false ]
console.log(Object.entries(tinder)) //[ [ 'id', '123' ], [ 'name', 'adi' ], [ 'isloggedIn', false ] ]
console.log(tinder.hasOwnProperty('isloggedIn'));  //true

/*Own properties are properties that belong directly to an object and are not inherited from its prototype.
 Enumerable properties are properties that appear during property enumeration (such as in a for...in loop). 
Object.assign() copies only properties that are both own and enumerable, ignoring inherited and non-enumerable properties.

Own properties are properties that belong directly to the object itself, not properties inherited from its prototype.

Enumerable means:
The property is visible when JavaScript loops through the object's properties.

const obj = {
    name: "Aditya",
    age: 22
};

for (let key in obj) {
    console.log(key);
} // name
     age

//Non -enumerable 
     const obj = {};

Object.defineProperty(obj, "secret", {
    value: "hidden",
    enumerable: false
});

console.log(obj.secret);
for (let key in obj) {
    console.log(key);
}

//Nothing is printed because secret is non-enumerable.

Object.assign() will ignore it.
*/

//Object destructuring is a shortcut to extract values from an object and store them in variables.
const course={
    name:"adi",
    price: "931",
    course:"hindi"
}
console.log(course.course) //hindi and the name of the object and it's key can be same

const course1={
    name:"adi",
    price: "931",
    coursename:"hindi"
}
// const {coursename}=course1
// console.log(coursename) //hindi

const {coursename : cp}=course1 //Here the object is de-structured as the cp becomes a name alias for coursename and can be used for access
console.log(cp) //hindi

// const navbar = (props.company) => {  //It is used in react and props is used here to access anything like props.name or whatever

// }
// navbar(company="hitesh")

//const navbar = ({company}) =>   //Here the object is de-structured

//APNA KAAM KISI AUR PE DAALNE KO API BOLTE HAIN

//The values which we get from backend and how do we write those values

//Earlier the values used to come in XML format
//And now the values come in JSON format.


//Format of JSON
//It does not have a object name but object and also arrays could be returned in JSON format

// {
//     "name":"adu",
//     "boy":"yes"
// }

//We will call any url with the help of Fetch method and then we will get the desired data.
//Use Online JSON formatter to understand the response in JSON format

/*JSON stands for:

JavaScript Object Notation

It is a lightweight format used to exchange data between a client and a server.

JavaScript Object	                        JSON
Keys can be unquoted	                    Keys must be in double quotes
Can contain functions	                    Cannot contain functions
Used inside JS code	                        Used for data exchange

An API (Application Programming Interface) allows two applications to communicate.

A JSON API is an API that sends and receives data in JSON format.
When your JavaScript app requests data from a server, the server often responds with JSON.

Example Response from an API
{
    "id": 1,
    "name": "Aditya",
    "email": "aditya@gmail.com"
}

Suppose you call an API:

fetch("https://api.example.com/user")

The server may return:

{
    "name": "Aditya",
    "age": 22,
    "city": "Bhubaneswar"
}

JavaScript converts that JSON into an object:

const data = {
    name: "Aditya",
    age: 22,
    city: "Bhubaneswar"
};

Then you can use destructuring:

const { name, city } = data;

console.log(name);
console.log(city);

Output:

Aditya
Bhubaneswar

Object destructuring is a JavaScript feature that allows extracting properties
from an object and assigning them directly to variables using a concise syntax.

A JSON API is an API that exchanges data in JSON format. It is commonly used
for communication between a frontend application and a backend server.
*/