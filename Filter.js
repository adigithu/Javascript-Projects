const code=["Js", "Python", "Ruby"]
const values=code.forEach((item) => {
    console.log(item)
})
console.log(values) //undefined
//forEach does not returns values


/*
filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.
*/


const mynums=[1,2,3,4,5,6,7,8]
const num=mynums.filter((num) => num>4)
console.log(num) //[ 5, 6, 7, 8 ]
//Whenever we use filter we will have a callback function inside the filter and with the help of it we can access each value in the 
//given array and then a condition follows it and the filter methid returns values unlike forEach which does not.


const a=mynums.filter((num) => { //We have to use return keyword to return the given numbers if within {}
    return num > 4
})
console.log(a) //[ 5, 6, 7, 8 ]

const newnums=[]
mynums.forEach((item)=> {
    if (item>4){
        newnums.push(item)
    }
})
console.log(newnums) //[ 5, 6, 7, 8 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
];

const user= books.filter((bk) => bk.genre==='History')
console.log(user)
/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
const user1=books.filter((bk)=> bk.edition>2013)  // { return bk.publish >= 2000 } if we are giving {} then make use of return
console.log(user1)
/*[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/
//We cannot re declare a variable using const but we can overwrite it
