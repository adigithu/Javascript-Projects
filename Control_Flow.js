// if 
const condition=true
if (condition){ //If condition evaluates to true then the code inside the if statement will be executd
    console.log("yes")
}
//===:- It checks the type and value as well
// if (2=="2")//True
// if (2==="2") //False
// if (condition){

// }
// else{

// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User Power: ${power}`) //User Power: fly
// }
// //var has completely global scope so the varaibale would be accessed anywhere in the code
// if (score>100) console.log("Hi"), console.log("Bye"); //Hi Bye
// //The above is called implicit scope

// let bal=40
// if (bal>50){
//     console.log("Yes")
// }
// else if(bal==40){
//     console.log("No") //No
// }

const userLoggedIn=true
const debit=true
if (userLoggedIn && debit){ //It will check both the conditions
    console.log("Allow") //Allow
}
// if (condition || condition) //The code inside it will be executed even if one condition is true
