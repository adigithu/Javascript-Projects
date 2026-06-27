class User{
    constructor(username){
        this.username=username
    }
    LogMe(){
        console.log(`Username is ${this.username}`)
    }
    static created(){ //After static keyword is used, adu cannot have access to it
        return `123`
    }
}
// const adu=new User("Aditya")
// console.log(adu.created())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const c=new Teacher("Boi", "Adu.com")
c.LogMe() //Username is Boi
console.log(c.created()) //It cannot even have access to created function