<<<<<<< HEAD
function sayHello(name){
=======
const sayHello = (name) => {
>>>>>>> 2a6f6d5d9123e01d0711be73658781348b10dbfe

    if(name){
        return `Hello ${name}, how are you?`
    }
    else {
        return `Hello World!`
    }
    
}
function sayBye(name){

<<<<<<< HEAD
    if(name){
        return `Bye ${name}, have a nice day!`
    }
    else {
        return `Bye World!`
    }
    
}


exports.sayHello = sayHello
exports.sayBye = sayBye
=======
const prismaClient = () => {
    const { PrismaClient } = require('@prisma/client')
    return prisma = new PrismaClient()
}

module.exports = { sayHello, prismaClient}
>>>>>>> 2a6f6d5d9123e01d0711be73658781348b10dbfe
