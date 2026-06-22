/* Javascript is synchronous (each code will be executed synchronously)
JS is single threaded language because in a single thread every operations would be executed in a single thread
And JS comes with a run-time environment(nodejs, web browser)

Synchronous and single threaded is the default behavior of JS

In execution context, execute one line of code at a time

Each operation waits for the last one to complete before execution

////////////////////////Blocking code vs non-blocking code
Blocking code:

Block the flow of a given program
Read file synchronous

Non-Blocking code:

Does not blocks the execution
Read file asynchronous
Everything has use-cases.

WEB api is inside in browser
DOM api is not available in node

Register call back records all the events and will put the call back into the task queue
Task queue handles and puts into the call stack from which calls have been made.

fetch() api has a promise queue but it has high priority but the same concept as task queue.

1. JavaScript is Synchronous
console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C

Why?

Because JS executes code line by line.

Line 1 → Execute
      ↓
Line 2 → Execute
      ↓
Line 3 → Execute

This behavior is called Synchronous.

Definition

One task at a time, in order.

2. JavaScript is Single Threaded

Think of a thread as a worker.

Single Thread
👷 Worker

Only one worker is available.

That worker can do:

Task 1
 ↓
Task 2
 ↓
Task 3

But not:

Task 1 and Task 2 together

So JavaScript executes only one thing at a time.

3. Runtime Environment

JavaScript itself is small.

To do real work, it needs an environment.

Examples:

Browser
Chrome
Firefox
Edge

Provides:

DOM
Web APIs
Local Storage
Fetch API
Node.js

Provides:

File System
Server Features
Network Features
4. Execution Context

Whenever JS runs code, it creates an execution context.

Think of it as a workspace.

Example:

let name = "Aditya";
console.log(name);

JS creates a workspace and executes:

Create variable
 ↓
Store value
 ↓
Print value
5. Call Stack

Very important.

Think of a stack of plates.

Top
-----
Task C
-----
Task B
-----
Task A
-----

The top task executes first.

Example:

function one(){
    console.log("One");
}

one();

Flow:

Call Stack

Push one()
Execute
Pop one()
6. Blocking Code

Example:

let start = Date.now();

while(Date.now() - start < 5000){}

console.log("Done");

For 5 seconds:

Everything stops

Browser freezes.

This is called:

Blocking Code

Because it blocks the main thread.

7. Non-Blocking Code

Example:

setTimeout(() => {
    console.log("Hello");
}, 5000);

console.log("World");

Output:

World
Hello

Why?

JS doesn't wait.

It continues executing.

This is called:

Non-Blocking Code
8. Synchronous File Reading

Node.js:

fs.readFileSync("file.txt");

JS waits until file is read.

Read file
 ↓
Then continue

Blocking.

9. Asynchronous File Reading
fs.readFile("file.txt", function(err,data){
   console.log(data);
});

JS doesn't wait.

Start reading
 ↓
Continue other work
 ↓
Data arrives later

Non-blocking.

10. Web APIs

Web APIs are provided by browsers.

Examples:

setTimeout()
fetch()
DOM
localStorage

These are NOT part of JavaScript itself.

Browser provides them.

11. DOM API

DOM = Document Object Model

HTML:

<h1>Hello</h1>

JavaScript:

document.querySelector("h1");

Allows JS to access HTML.

Important

DOM exists only in browsers.

Works:

document.getElementById()

in Chrome.

Does NOT work in Node.js.

12. Callback

Example:

button.addEventListener("click", function(){
    console.log("Clicked");
});

This function:

function(){
   console.log("Clicked");
}

is called a callback.

It waits until an event happens.

13. Event Loop

The brain of asynchronous JavaScript.

It continuously checks:

Is Call Stack empty?

If yes:

Move tasks from queue
to call stack
14. Task Queue (Callback Queue)

Example:

setTimeout(() => {
   console.log("Hello");
}, 0);

Flow:

Step 1
setTimeout goes to Web API
Step 2

Timer finishes.

Callback goes to:

Task Queue
Step 3

Event Loop checks:

Call Stack Empty?

Yes.

Move callback into stack.

Output:

Hello
15. Fetch API

Example:

fetch("https://api.com")

Used for API calls.

Because network requests take time.

16. Promise Queue (Microtask Queue)

Fetch callbacks don't go into Task Queue.

They go into:

Microtask Queue
(Promise Queue)

Example:

Promise.resolve()
.then(() => console.log("Promise"));
17. Priority of Queues

Suppose:

setTimeout(() => console.log("Timeout"),0);

Promise.resolve()
.then(() => console.log("Promise"));

console.log("Start");

Output:

Start
Promise
Timeout

Why?

Because:

Microtask Queue (Promise Queue)
        ↑ Higher Priority

Task Queue
        ↓ Lower Priority

Event Loop always checks:

1. Call Stack
2. Microtask Queue
3. Task Queue
Complete Flow Diagram
                    JavaScript Engine
                           │
                           ▼
                      Call Stack
                           │
                           ▼
                    Executes Code
                           │
                           ▼
 ------------------------------------------------
|               Browser Web APIs                 |
| setTimeout  fetch  DOM events  localStorage    |
 ------------------------------------------------
                           │
                           ▼
                   Task Queue
                (setTimeout etc.)
                           │
                           ▼
               Microtask Queue
              (Promises, fetch)
                           │
                           ▼
                     Event Loop
                           │
                           ▼
                  Back to Call Stack
One-Line Revision
Synchronous → One line at a time.
Single Threaded → One worker.
Call Stack → Where functions execute.
Web APIs → Browser features like setTimeout, fetch.
Callback → Function executed later.
Task Queue → Stores callback tasks.
Promise/Microtask Queue → Stores promise callbacks.
Event Loop → Moves tasks into the Call Stack.
Blocking Code → Stops everything.
Non-Blocking Code → Lets other code continue running.

This entire topic is the foundation for understanding setTimeout, Promises, async/await, fetch(), and most JavaScript interview questions.

can you explain me all these paragraph wise as i am nnot getting it so make it in simple

Absolutely. Let's forget the technical definitions for a moment and understand it like a real-life story.

Imagine JavaScript as a Single Worker

Suppose there is only one worker named JavaScript in an office.

👨‍💼 JavaScript Worker

People keep giving him tasks.

Example:

console.log("A")
console.log("B")
console.log("C")

The worker does:

Print A
↓
Print B
↓
Print C

Output:

A
B
C

He cannot print B before finishing A.

This is called Synchronous Execution.

What Does Single Thread Mean?

Imagine you go to a bank.

Single Counter
Customer 1
Customer 2
Customer 3

Only one employee is serving customers.

The employee serves:

Customer 1
↓
Customer 2
↓
Customer 3

One at a time.

JavaScript works exactly like that.

There is only one main worker.

That's why JavaScript is called Single Threaded.

The Problem

Suppose the worker gets a task:

Read a huge file

which takes 10 seconds.

If he waits for the file:

Read file
(10 seconds)
↓
Do next task

everything stops.

The user sees the application frozen.

This is called Blocking.

Blocking Code

Imagine you're at a restaurant.

You order food.

The waiter says:

Stand here.
Don't move.
Wait 20 minutes.

You cannot do anything else.

That's blocking.

Example:

let data = readFileSync()

JavaScript waits.

Read file
↓
Finish reading
↓
Continue

Nothing else happens meanwhile.

Non-Blocking Code

Now imagine another waiter says:

Your food will take 20 minutes.

Go enjoy yourself.

I'll call you when it's ready.

Much better.

This is non-blocking.

JavaScript starts the work and continues doing other things.

When the work finishes, it gets notified.

Why Doesn't JavaScript Freeze Then?

Good question.

If JavaScript has only one worker, how can it do multiple things?

The answer is:

Browser helps JavaScript.
Browser Has Helpers

Imagine JavaScript worker has assistants.

JavaScript Worker
        |
 -------------------
 |        |        |
Timer   Fetch    DOM
Helper  Helper   Helper

These helpers are called:

Web APIs

Examples:

setTimeout()
fetch()
DOM

They are provided by the browser.

Example With setTimeout

Look at this:

console.log("A")

setTimeout(() => {
    console.log("B")
}, 2000)

console.log("C")

Many beginners think:

A
(wait 2 sec)
B
C

Wrong.

Actual output:

A
C
(wait 2 sec)
B

Why?

Let's see.

Step 1

JavaScript executes:

console.log("A")

Output:

A
Step 2

JavaScript sees:

setTimeout(...)

He says:

I don't handle timers.

He gives it to the Browser Timer Helper.

JavaScript → Browser Timer

Timer starts counting.

Meanwhile JavaScript continues.

Step 3

JavaScript executes:

console.log("C")

Output:

A
C
Step 4

After 2 seconds

Browser says:

Timer finished.

But JavaScript might be busy.

So browser places the callback in a waiting area.

Waiting Area = Task Queue

Think of it as:

People waiting outside the office

-------------
| Callback |
-------------

This waiting area is called:

Task Queue
Event Loop

Now imagine a security guard.

His job:

Check if JavaScript worker is free.

This security guard is called:

Event Loop

He continuously checks:

Worker busy?

If yes:

Wait

If no:

Take next callback
from queue
and give it to worker
Complete Story
console.log("A")

setTimeout(() => {
    console.log("B")
}, 2000)

console.log("C")

Flow:

Print A
↓
Give timer to browser
↓
Print C
↓
JavaScript becomes free
↓
2 seconds pass
↓
Callback enters Task Queue
↓
Event Loop notices worker is free
↓
Callback runs
↓
Print B

Output:

A
C
B
What is a Callback?

A callback is simply:

A function that will run later.

Example:

function hello(){
    console.log("Hello")
}

When used inside:

setTimeout(hello,2000)

the function waits.

After 2 seconds it runs.

That's a callback.

What is Fetch?

Suppose your website wants data from a server.

Example:

fetch("studentData")

Getting data may take:

1 second
5 seconds
10 seconds

JavaScript cannot wait.

So it asks the browser:

Please fetch the data.

Browser starts the network request.

JavaScript continues doing other work.

Promise Queue

Fetch is special.

Its callbacks go into a special VIP queue.

Normal Queue:

Task Queue

VIP Queue:

Promise Queue
(Microtask Queue)

Promises get higher priority.

Example
setTimeout(() => {
   console.log("Timeout")
},0)

Promise.resolve().then(() => {
   console.log("Promise")
})

console.log("Start")

Output:

Start
Promise
Timeout

Why?

Because Promise Queue is checked first.

Simple Analogy

Imagine:

JavaScript = Teacher
Task Queue = Students
Promise Queue = Class Monitor
Event Loop = School Peon

When teacher becomes free:

Peon asks:

Any Class Monitor waiting?

If yes:

Send Monitor first

Then:

Send normal students

That's exactly why:

Promise Queue
     before
Task Queue
Final One-Line Summary
JavaScript = One worker

Call Stack = Worker's desk

Web APIs = Browser helpers

Callback = Work to do later

Task Queue = Normal waiting line

Promise Queue = VIP waiting line

Event Loop = Security guard checking when worker is free

Blocking Code = Worker waits

Non-Blocking Code = Worker keeps working while helpers do the task

*/