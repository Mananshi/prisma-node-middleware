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


exports.sayHello = sayHello
exports.sayBye = sayBye
