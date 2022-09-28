const { sayHello, sayBye, prismaClientInstance } = require("node-hello-name-test");


let name = "John"

console.log(sayHello())
console.log(sayHello(name))
console.log(sayBye())
console.log(sayBye(name))

const prisma = prismaClientInstance

export const getObject = async (req, res) => {
    try {
      const objects = await prisma.object.findMany()
  
      res.send(objects)
    } catch (err) {
      console.log(err)
  
      res.send(err)
    }
  }