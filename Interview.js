/*
Execution context
Call Stack(Memory in which how the functions would be executed and how the functions would come out of the stack)

JS Execution Context: How the file would be executed by JS
JS runs the code in 2 phases:

Suppose we give the js file, the first thing would be done is 
1. Global execution context would be made and would be stored in this (Global EC of Browser is Window)
JS is single threaded process.
2. Function Execution Context 
3. Optional (Eval Execution Context) It is optional

JS code in 2 phases:
1. Memory Creation Phase or Creation Phase (Only memory is allocated to variables but the variables are not used for any execution)
2. Execution Phase (The variables are executed)
*/

let a=10
let b=20
function add(n1,n2){
    let total=n1+n2
    return total
}
let result1=add(a,b)
let result2=add(23,45)

/*
Step 1: Global Execution Context or Global Environment is assigned to this
Step 2: Memory phase (All the variables are collected and undefined is assigned to them)

Step 1 (memory phase)

Val 1 -> Undefined
Val 2 -> Undefined
add -> Definition (All the code inside it goes to add)
result1 -> Undefined
result2 -> Undefined

First cycle is completed 

Now, the execution phase would come into play.

Step 2 (Execution Context)

Val1 -> 10
Val2 -> 20

add would make it's own new execution context
First a new variable environment and execution thread is created for the new execution context and it is made for the 
Then again the memory phase and execution phase would be done

for 1st function call
step 1

val1 and val2 would be undefined
total -> undefined

Step 2
n1 -> 10
n2 -> 20
total -> 30

then the return would be returned to the global execution context
Now the new executional context of result1 would be deleted
Now we would ho to Execution phase of Step 2 (2)
and result1 would be assigned 30

Again the result2 would do the same procedure
step 1

val1 and val2 would be undefined
total -> undefined

Step 2
n1 -> 10
n2 -> 20
total -> 30

then the return would be returned to the global execution context
Now the new executional context of result1 would be deleted
Now we would ho to Execution phase of Step 2 (2)
and result2 would be assigned 30

In call stack, First GEC would be there
Then func1 would be put into the stack
And it would come out when the function is completed and the value is returned
The stack follows LIFO order
*/
