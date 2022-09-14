const { sayHello, sayBye } = require("node-hello-name-test");
let name = "John"


console.log(sayHello())
console.log(sayHello(name))
console.log(sayBye())
console.log(sayBye(name))