//reduce() is an array method that reduces all elements of an array into a single value.

const array = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial); //10
/*accumulator → stores the running result.
currentValue → current array element.
initialValue → starting value of accumulator.
*/

const a=array.reduce(function (acc, curval) {
    return acc+curval
}, 0)
console.log(a) //10

const card=[
    {
        item:"JS",
        price:3000
    },
    {
        item:"C",
        price:2000
    },{
        item:"Ruby",
        price:1000
    },
]
const b=card.reduce((acc, ca) => acc+ ca.price, 0)
console.log(b)