import { Hono } from 'hono'
import { getPrisma } from './lib/prisma'

type Bindings = {
  DATABASE_URL: string,
  DIRECT_URL: string
}

const app = new Hono<{Bindings: Bindings}>()

app.get('/', async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)

  const response = await prisma.user.create({
    data: {
      username: "Teja Kumar",
      password: "Admin123$"
    }
  })

  return c.json(response)
})

export default app