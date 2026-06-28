//In JavaScript, getters and setters are special methods that allow you to bind an object property to a function

/*
Getter (get): Executes a function automatically when a specific property is read.
Setter (set): Executes a function automatically when a specific property is assigned a new value.

If we want to set any values from outside the class, then we call it as setter
If we want to get any values from outside the class, then we call it as getter
*/

class User{
    constructor(email, password){  //Maximum call stack exceeded as both constructor and setter are setting the password
        this.email=email
        this.password=password
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }

    set email(value){
        this._email=value.toUpperCase()
    }
    get password(){
        return `${this._password}Aditya`
    } //Whatever properties are defined inside a class, they become methods if we are defining setter and getter

    set password(value){
        this._password=value.toUpperCase()
    }
}
const adi=new User("Aditya@gmail.com", "145")
console.log(adi.password) //145Aditya
console.log(adi.email) //ADITYA@GMAIL.COM