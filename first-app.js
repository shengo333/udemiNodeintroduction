const person = {
    name: "Max",
    age: 35,
    greeting(){
        console.log('hey there ' + this.name)
    }
}

const printName = ({name, age}) => {
    console.log(name, age)
}


printName(person)

const {name, age} = person 

console.log(name, age)

const hobbies = ['sport', 'gaming', 'running'];

const [hobby1, hobby2] = hobbies;

console.log(hobby2, hobby1)

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


// const toArray = (...args) => {
//     return args
// }

// console.log(toArray(1,2,3,10,18))

