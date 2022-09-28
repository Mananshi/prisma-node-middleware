import express from 'express'

export const app = express()

export const sayHello = (name) => {

    if(name){
        return `Hello ${name}, how are you?`
    }
    else {
        return `Hello World!`
    }
    
}
export const sayBye = (name) =>{

    if(name){
        return `Bye ${name}, have a nice day!`
    }
    else {
        return `Bye World!`
    }
    
}

export const prismaClientInstance = () => {
    const { PrismaClient } = require('@prisma/client')
    return new PrismaClient();
}

export const test = async (req, res) => {
    return res.status(200).json({ message: 'Hello World!' })
}
