console.log(3>2)
console.log("02">1)  // 2 is converted into number
 //Typesript does not allow 2 different data types to be compared with each other. 
 //It forces some strict rules as compared to Javascript.

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true as Null is converted into 0
/* The reason is that an equality check == and comparisons >,<,>=,<= work differently
Comparisons convert null to a number, treating it as 0. That's why (3) null>=0 is 0
and null > 0 is false
*/
console.log(undefined == 0) //It would give false in every condition
 //=== It checks the values as well as the datatype

console.log("2"===2) //false