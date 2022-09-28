function sayHello(name){

    if(name){
        return `Hello ${name}, how are you?`
    }
    else {
        return `Hello World!`
    }
    
}
function sayBye(name){

    if(name){
        return `Bye ${name}, have a nice day!`
    }
    else {
        return `Bye World!`
    }
    
}

function prismaClientInstance() {
    const { PrismaClient } = require('@prisma/client')
    return new PrismaClient();
}

const protect = async (req, res, next) => {
    res.send("Hello World!")
  }

exports.sayHello = sayHello
exports.sayBye = sayBye
exports.prismaClientInstance = prismaClientInstance

module.exports = protect
