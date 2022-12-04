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



// const result = hobbies.filter((element, index) => {
//     return index != 2
// })

// console.log(result)

// const copiedArray = [...hobbies]

// console.log(copiedArray, 'this is copy')


// const copiedPerson = {...person}

// console.log(copiedPerson, 'copied person')


const toArray = (...args) => {
    return args
}

console.log(toArray(1,2,3,10,18))

