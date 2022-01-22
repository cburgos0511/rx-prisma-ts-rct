import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main(){
  await Promise.all(
    createUsers().map(user => db.user.create({ data: user }))
  )
}

main()

function createUsers() {
  return [
    {
      name: "John Doe",
      email: "jdoe@gmail.com",
      password: "123456",
    },
    {
      name: "Jane Doe",
      email:"janedoe@gmail.com",
      password: "123456",
    }
  ]
}