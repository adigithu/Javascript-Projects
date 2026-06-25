//The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise
//that is fulfilled once the response is available.

//The promise resolves to the Response object representing the response to your request.

//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
//A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
//Instead, a then() handler must check the Response.ok and/or Response.status properties.

//If we made a request with promise and we get a 404 error code then we would get it in the response and not in resolve and regret.


//Fetch() makes use of priority queue or micro task queue

/* reponse=fetch('something')
It works in 2 parts:

Part 1:

It handles browser-based api or node api And then it gets network request . If request is successful then it goes to the onfulfilled otherwise onRejection

Part 2:

It reserves some memory in space 
It has 2 arrays:
1. OnFulfilled[]: PRoomise's Resolve
2. OnRejection[]: Promise's Rejection
These 1 and 2 have functions which makes up the data

1. You call fetch()
const response = fetch("https://api.github.com/users/hiteshchoudhary");
fetch() immediately returns a Promise.
At this moment, the Promise is in the Pending state.
fetch()
   │
   ▼
Promise (Pending)
2. Browser/Node handles the network request

fetch() itself doesn't send the request directly using JavaScript.

Instead, it asks the Browser Web API (or Node.js API) to make the network request.

JavaScript
    │
    ▼
fetch()
    │
    ▼
Browser Web API / Node API
    │
    ▼
Network Request
3. While the request is running

JavaScript does not wait.

It continues executing the next lines of code because fetch() is asynchronous.

4. Browser receives the response

Now two cases are possible:

✅ Network request succeeds

The browser receives a response (even if it's 200, 404, or 500).

It tells the Promise:

Resolve(Response Object)

That response is stored in the Promise.

Promise
│
├── OnFulfilled[]
└── OnRejected[]

The callback inside .then() is placed in the OnFulfilled queue.

❌ Network request fails

Examples:

No internet
Invalid URL
DNS failure

Then the Promise is Rejected.

The callback inside .catch() is placed in OnRejected.

5. Microtask Queue

Once the Promise is resolved or rejected, JavaScript puts the corresponding callback into the Microtask Queue (also called the Promise Queue).

Promise Resolved
       │
       ▼
Microtask Queue
       │
       ▼
.then() executes

The Microtask Queue has higher priority than the normal Callback Queue.

6. Response object

When .then() runs,

.then((response)=>{

response is not the actual JSON data.

It is a Response object.

Example:

Response
{
   status: 200,
   ok: true,
   headers: ...
}
7. Convert to JSON
response.json()

This reads the response body and converts it into a JavaScript object.

It also returns another Promise.

Response
      │
      ▼
response.json()
      │
      ▼
JavaScript Object
8. Second .then()
.then((data)=>{
    console.log(data)
})

Now data contains the actual GitHub user information.

Why doesn't 404 go to .catch()?

This is the most confusing part.

Suppose you request:

https://api.github.com/users/abcdxyz

GitHub replies:

Status: 404

The server did respond successfully.

Only the requested resource doesn't exist.

So the Promise is still Resolved.

Network Success
       │
       ▼
Response (404)
       │
       ▼
.then()

You should check:

if(response.ok){
   // Success
}else{
   // Handle 404, 500, etc.
}

.catch() runs only when the request itself cannot be completed.

Examples:

❌ Internet disconnected
❌ Invalid domain
❌ DNS lookup failed
Complete Flow
fetch()
    │
    ▼
Returns Promise (Pending)
    │
    ▼
Browser Web API / Node API
    │
    ▼
Network Request
    │
    ├───────────────┐
    │               │
Success         Network Error
    │               │
    ▼               ▼
Resolve         Reject
    │               │
    ▼               ▼
OnFulfilled[]  OnRejected[]
    │               │
    ▼               ▼
Microtask Queue
    │
    ▼
.then(response)
    │
    ▼
response.json()
    │
    ▼
.then(data)
    │
    ▼
console.log(data)
One thing to correct from your notes:

"If we get a 404 error code then we would get it in the response and not in resolve and reject."

A more accurate statement is:

404/500 → Promise is still resolved, so execution goes to .then(). You check response.ok or response.status.
Network failure (no internet, invalid domain, etc.) → Promise is rejected, so execution goes to .catch().