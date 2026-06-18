"use strict"; //It would treat all the JS code as newer version of JS
//alert(3+3) //It would run in the console of web browser and not in node JS
//JS engine is in the browser
//https://tc39.es/: This is the standards for JS and it is tough and is 
//basically for those who writing web engines or web browsers

//mdn is mostly used for web documentation
/*window.alert() instructs the browser to display a dialog with an optional message, and 
to wait until the user dismisses the dialog.

alert()
alert(message)

message is Optional
A string you want to display in the alert dialog, or, alternatively,
an object that is converted into a string and displayed.
*/
 // It's return values is None (Undefined)

/*Dialog boxes are modal windows - they prevent the user from accessing the rest of the program's 
interface until the dialog box is closed. For this reason, you should not overuse any 
function that creates a dialog box (or modal window).
*/

//PRIMITIVE DATA TYPES

let name="adi"  //String
let age=18 //number
let isLoggedIn=true //Boolean

//number => 2 to the power 53
//big int
// string: ' ' or " "
//boolean => true/false
//null: It's a standalone value
//undefined: We have declared the variable but we have not assigned any value to it

let state=null //It denotes a empty value
//It's used when you want a variable to exist but currently have no meaningful value to store

//symbol (It's mostly used in REACT for finding the unique components)

//OBJECTS
console.log(typeof isLoggedIn)  //boolean
console.log(typeof null)  //object
/*null is not actually an object. It represents the intentional absence of a value.

However, due to a historical bug in the first JavaScript implementation, null was mistakenly 
classified as an object, and this behavior was kept for backward compatibility.
*/

console.log(typeof undefined) //undefined
//Because undefined is its own primitive data type in JavaScript.