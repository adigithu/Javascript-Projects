function User(email, password){
    this._email=email
    this._password=password

    Object.defineProperty(this, 'email', {
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this, 'password', {
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

const adi=new User("Aditya.com", "Adi12457")
console.log(adi.email) //ADITYA.COM