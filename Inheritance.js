class User {
    constructor(username) {
        this.username=username
    }
    LogMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // It would first access the User class
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const a=new Teacher("Adi", "Adi@gmail.com", "123") //Class constructor cannot be invoked with 'new'
a.addCourse() //A new course was added by Adi

const b=new User("Aditya")
b.LogMe() //Username is Aditya

a.LogMe() //Username is Adi

console.log(a instanceof Teacher) //true
console.log(a instanceof User) //true