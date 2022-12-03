const person = {
    name: "Max",
    age: 35,
    greeting(){
        console.log('hey there ' + this.name)
    }
}

person.greeting()