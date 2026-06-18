// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }//Ctrl+D for selecting multiple same name elements inside the for loop

let arr=["a", "b", "c"]
for(let index=0; index<arr.length; index++){
    const element=arr[index]
    console.log(element) //a b c in down order
}
//break and continue

for (let index = 0; index <=20; index++) {
    if(index==5){
        break
    }
    console.log(index) // 0 1 2 3 4
}

for (let index = 0; index <=20; index++) {
    if(index==5){
        continue //execpt 5 everything else will be printed
    }
    console.log(index) // 0 1 2 3 4
}
