import Fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'

dotenv.config()

const server = Fastify()

await server.register(cors)

server.listen({ port: 3001 }, () => {
  console.log('Server running on http://localhost:3001')
})
