function SetUsername(username){
    //Complex DB calls
    this.username=username
}

function create(username, email, password){
    SetUsername.call(this, username) //Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
    this.email=email
    this.password=password
}
const a=new create("Adi", "Adi.com", "124")
console.log(a) //create { email: 'Adi.com', password: '124' }

//create { username: 'Adi', email: 'Adi.com', password: '124' }  After using call and this(Current context)

//Call methods basically passes the current context to another function