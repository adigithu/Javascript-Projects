//Array enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
const a=[0,2,421,53]
/* Propeties of Array
1. JavaScript arrays are resizable and can contain a mix of different data types.
 (When those characteristics are undesirable, use typed arrays instead.)
2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1,
and so on — and the last element is at the value of the array's length property minus 1.
4. JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any
JavaScript objects create shallow copies, rather than deep copies).

Shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
as those of the source object from 
which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

Deep Copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
 as those of the source object from which the copy was made.
 As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 
*/
const ar=new Array(1,2,3,4)
console.log(ar) //[ 1, 2, 3, 4 ]
console.log(ar[2])  //3

// Array Methods  
ar.push(5)
console.log(ar) //[ 1, 2, 3, 4, 5 ]
ar.pop()
console.log(ar) //[ 1, 2, 3, 4 ]
//Pop removes the last element in the array

ar.unshift(9)
console.log(ar) //[ 9, 1, 2, 3, 4 ]
//Here, 9 will be added to the first position and all the rest elements will be shifted one place further

ar.shift()
console.log(ar) //[ 1, 2, 3, 4 ]   
//The leftmost element will be removed from the array

console.log(ar.includes(9))  //False (It checks if a given element is present in the array or not)
console.log(ar.indexOf(3))   //3 is present at index 2 
console.log(ar.indexOf(9))   //-1 as the given element 9 is not there

const arr=ar.join() //All the elements of the array would be converted into string
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr)
//@param separator — A string used to separate one element of the array from the next in the resulting string.
//If omitted, the array elements are separated with a comma.


//Slice, Splice

console.log("A ", ar)
const ab=ar.slice(1,3) //Here the 1st and 2nd index's element would be returned and the 3rd one will be excluded
console.log(ab)  //[ 2, 3 ]
  
const ac=ar.splice(1,3)   //Here the range will also be included
console.log(ac) //[ 2, 3, 4 ]
console.log(ar)  //[1] So after using splice the original array will be manipulated and the 


/* Slice
start is included.
end is excluded.
Does not change the original array.

Splice
Changes the original array.
Removes or adds elements.

slice() returns a portion of an array without modifying the original array. splice() modifies the original array by adding, removing,
or replacing elements and returns the removed elements.
*/
