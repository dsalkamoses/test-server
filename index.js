const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'New World 2' }
})

//server for ecs new
const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 80 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
