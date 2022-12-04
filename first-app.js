const person = {
    name: "Max",
    age: 35,
    greeting(){
        console.log('hey there ' + this.name)
    }
}

const hobbies = ['sport', 'gaming', 'running'];

// for (let hoby of hobbies){

//     console.log(hoby)
// }


// hobbies.forEach(e =>{
//     console.log(e)
// })

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))


hobbies.push('driving')
console.log(hobbies)