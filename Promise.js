//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//It means whichever task we have given; it will be there in the queue but it will not be loaded for it's execution.

//The promises are completed in future.

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

// USE of fetch

// fetch('https://adi.com').then().catch().finally()
/* if we will get some response, it will be in then.
If error, then it will be in catch.
And finally will be run

A Promise is an object representing the eventual completion or failure of an asynchronous operation.
*/

// const promiseOne=new Promise()  //It creates a new promise object
/* There are 2 ways of making promises:
1. Consuming a promise
2. Creating a promise

//Promise takes a callback inside it
*/

//PROMISE CREATION

// const promiseOne=new Promise(function(resolve, reject) {
//     //Do an async task
//     //DB calls, cryptography, network calls
//     setTimeout(function(){
//         console.log("Async") //It will be executed after an interval of 1 sec
//         resolve()
//     },1000) //It will connect with the promiseOne.then() and then that promise will be consumed
// })

// //PROMISE CONSUMPTION
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })  //It has connection with resolve and it has a callback and it recieves an argument automatically and the values are returned from the
// //Promise creation

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task")
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Consumed")
// })

/* Term	                    Meaning
Promise	                    Object that handles async operations
Pending	                    Initial state
resolve()	                Marks success
reject()	                Marks failure
.then()	                    Runs when resolved
.catch()	                Runs when rejected
.finally()	                Runs in both cases

Step 1: Create a Promise
new Promise(function(resolve, reject){
new Promise() creates a new Promise object.
The function inside it is called the executor function.
It receives two special functions:
resolve() → called when the task succeeds.
reject() → called when the task fails.

At this moment, the Promise state is:

Pending
Step 2: Start an asynchronous task
setTimeout(function(){

setTimeout() delays the execution of the function.

Syntax:

setTimeout(function, timeInMilliseconds)

Here,

2000

means 2000 milliseconds = 2 seconds.

So JavaScript says:

"Wait for 2 seconds, then execute this function."

Step 3: Execute after 2 seconds
console.log("Async task")

After 2 seconds, the console prints

Async task
Step 4: Resolve the Promise
resolve()

This is the most important line.

It tells JavaScript:

"The asynchronous task has completed successfully."

The Promise state changes from

Pending
      ↓
Fulfilled (Resolved)

If you didn't call resolve(), the Promise would stay in the Pending state forever, and .then() would never run.

Step 5: .then()
.then(function(){

.then() waits for the Promise to be resolved.

It does not run immediately.

It only runs after resolve() is called.

Step 6: Consume the Promise
console.log("Consumed")

Since the Promise has been resolved, this prints

Consumed
What is the output?

Immediately after running the code:

(wait for 2 seconds)

After 2 seconds:

Async task
Consumed
Timeline
Program Starts
      │
      ▼
Promise Created
      │
      ▼
State = Pending
      │
      ▼
setTimeout starts (2 sec)
      │
      ▼
(Waiting...)
      │
      ▼
2 seconds complete
      │
      ▼
console.log("Async task")
      │
      ▼
resolve()
      │
      ▼
Promise becomes Fulfilled
      │
      ▼
.then() executes
      │
      ▼
console.log("Consumed")
Visual Flow
Create Promise
      │
      ▼
Pending
      │
      ▼
setTimeout(2 sec)
      │
      ▼
"Async task"
      │
      ▼
resolve()
      │
      ▼
Promise Fulfilled
      │
      ▼
.then()
      │
      ▼
"Consumed"
Why do we use resolve()?

Imagine downloading a file:

Start Download
      │
      ▼
Downloading...
      │
      ▼
Download Finished
      │
      ▼
resolve()
      │
      ▼
.then() → Open the file

Here, resolve() is like telling JavaScript:

"My asynchronous work is finished. Now you can execute whatever is inside .then()."

Without resolve(), .then() will never execute because JavaScript keeps waiting for the Promise to finish.
*/

// const promiseThree=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email:"Adi.com"})  //It will provide these arguments to the user of the consuming promise
//     }, 2000);
// })
// promiseThree.then(function(user){
//     console.log(user) //{ username: 'Chai', email: 'Adi.com' }
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username: "Adi", password: "123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000);
// })
// promiseFour.then((user) => {
//     console.log(user)
//     return user.usernamne
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("Promise is resolved or rejected"))
// //Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

// const PromiseFive=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username: "Aditya", password: "456"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// });

// async function consumeFive() {  //Promise is an eventual completion object
//     try {
//         const response=await PromiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error) //ERROR: Something went wrong
//     }
// }
// consumeFive()   //Async and await cannot directly handle errors but it can be handled with the use of try and catch block

// async function getusers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error")
//     }
// }
// getusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error)
}) //Here fetch operation is performed first and then 

/*
fetch('https://api.github.com/users/hiteshchoudhary')
fetch() sends an HTTP GET request to the GitHub API.
It returns a Promise.
.then((response) => {
    return response.json()
})
.then() runs when the request is successful.
response contains the data returned by the server.
response.json() converts the JSON response into a JavaScript object.
It also returns a Promise.
.then((data) => {
    console.log(data);
})
This .then() receives the converted JavaScript object.
data contains all the GitHub user information.
console.log(data) prints the object in the console.
.catch((error) => {
    console.log(error);
})
.catch() runs if an error occurs (such as no internet or the request fails).
It prints the error in the console.
Flow of Execution
fetch()
    │
    ▼
Send request to GitHub
    │
    ▼
Receive Response
    │
    ▼
response.json()
    │
    ▼
JavaScript Object (data)
    │
    ▼
console.log(data)
    │
    ▼
If any error occurs → .catch()
In one sentence:

fetch() sends a request to the server, .then() processes the response, response.json() converts it into a JavaScript object,
the next .then() uses that data, and .catch() handles any errors.
*/