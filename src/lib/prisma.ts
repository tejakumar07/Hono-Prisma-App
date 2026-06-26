// import { PrismaClient } from "@prisma/client"
// import { PrismaNeon } from "@prisma/adapter-neon"

// export const getPrisma = (databaseUrl: string) => {
//   const adapter = new PrismaNeon({
//     connectionString: databaseUrl,
//   })

//   return new PrismaClient({
//     adapter,
//   })
// }



import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"

let prisma: PrismaClient

export const getPrisma = (databaseUrl: string) => {
  if (prisma) return prisma

  const adapter = new PrismaNeon({
    connectionString: databaseUrl,
  })

  prisma = new PrismaClient({ adapter })

  return prisma
}