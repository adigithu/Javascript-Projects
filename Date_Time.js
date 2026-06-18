/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number
 that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/
let mydate=new Date()
console.log(mydate)  //2026-06-08T05:10:31.524Z
//Date is a built-in JavaScript object used to work with dates and times.
//creates a Date object containing the current date and current time of your system.
//new → creates a new object.
//Date() → gets the current date and time.
//mydate stores that Date object.

//new Date() creates a Date object representing the current date and time. The returned value is an object,
// and it provides various methods to format and manipulate dates and times.

console.log(mydate.toString())  //Mon Jun 08 2026 10:44:12 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString())  //8/6/2026
console.log(mydate.toDateString())  // Mon Jun 08 2026
console.log(typeof mydate)  //Object

let cdate=new Date(2023, 0, 23)  //Month starts from 0 to 11 in JS
console.log(cdate)  //2023-01-22T18:30:00.000Z
console.log(cdate.toDateString()) //Mon Jan 23 2023

let adate=new Date(2023, 0, 23, 5, 3)  // 5 hours and 3 minutes
console.log(adate.toLocaleString())  //23/1/2023, 5:03:00 am

let bdate=new Date("2023-01-14")
console.log(bdate.toLocaleString())  //14/1/2023, 5:30:00 am

let ddate=new Date("01-14-2023")
console.log(ddate.toLocaleString())  //14/1/2023, 12:00:00 am

//******* Timestamp ********/
let mytime=Date.now()
console.log(mytime) //1780896814987
console.log(ddate.getTime())  //1673634600000 (milliseconds)
console.log(Math.floor(Date.now()/1000))  //1780897022 (Time in seconds)

let newdate=new Date()
console.log(newdate.getHours()) //11
console.log(newdate.getMonth()+1) //6
console.log(newdate.getDay()) //1 means monday

newdate.toLocaleString('default', {
    weekday: "long",   //ctrl+space would give suggestions
})
console.log(newdate)  //2026-06-08T05:48:17.346Z

/*let newdate = new Date();

console.log(
    newdate.toLocaleString('default', {
        weekday: "long"
    })
);

weekday: "long" tells JavaScript:
"Show the full name of the day."
*/