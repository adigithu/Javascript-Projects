const user="Adi.com"
if(user){ // condition = "" will lead to false and [] will lead to true
    console.log("Got email")
}
else{
    console.log("No")
}
/* Falsy values:
false, 0, "", -0 , BigInt 0n, "", null, undefined, NaN

Truthy Values:
"0", 'false', " ", [], {}, function(){}(Empty function)
*/

const use=[]
if (use.length===0){
    console.log("Array is empty") //Array is empty
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){  //It will return an array
    console.log("Object is empty") //Object is empty
}

//&&: Logical AND     ||: Logical OR


//Nullish Coalescing Operator (??) : null undefined
//The nullish coalescing operator (??) is a logical operator that returns its right-hand operand when 
//its left-hand operand is null or undefined, and otherwise returns its left-hand operand.
//It is the perfect tool for providing fallback default values without accidentally overriding valid falsy values like 0, false, or "".

let val1
val1=5 ?? 10
console.log(val1) //5

let val2
val2=null ?? 10
console.log(val2) //10

let a=undefined ?? 15
console.log(a) //15

let b= null ?? undefined
console.log(b) //undefined

let c = null ?? 20 ?? 5
console.log(c) //20

let d=undefined ?? null
console.log(d) //null

//Ternary operator

//Syntax: condition ? true : false

const ab=100
ab >=80 ? console.log("Less") : console.log("More")//Less