const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'World' }
})

//server for ecs new update
const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 80 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()