const sayHello = (name) => {

    if(name){
        return `Hello ${name}, how are you?`
    }
    else {
        return `Hello World!`
    }
    
}

const prismaClient = () => {
    const { PrismaClient } = require('@prisma/client')
    return prisma = new PrismaClient()
}

module.exports = { sayHello, prismaClient}