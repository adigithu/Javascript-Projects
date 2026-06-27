// class User {
//     constructor(username, email, password){ //When an object of a given class is initialized, then the constructor is called automatically
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUser(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const a =new User("Adi", "Adi.com", "123")
// console.log(a.encryptPassword()) //123abc
// console.log(a.changeUser()) //ADI

//Behind the scenes

function NewUser(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}

NewUser.prototype.changeUser=function(){
    return `${this.username.toLowerCase()}`
}

NewUser.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const b =new NewUser("Pratyush", "Pratyush.com", "123")
console.log(b.encryptPassword()) //123abc
console.log(b.changeUser()) //pratyush