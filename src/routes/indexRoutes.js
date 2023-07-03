
function routes(fastify, options, done) {

  fastify.get('/', async (request, reply) => {
    return reply.sendFile('index.html');
  });

    fastify.get('/ingredients', async (request, reply) => {
      reply.send('Here will be all ingredients');
    });
  
    fastify.get('/ingredients/add', async (request, reply) => {
      reply.send('Here will be the form to add an ingredient');
    });
  
    fastify.get('/recipes', async (request, reply) => {
      reply.send('Here will be all recipes');
    });
  
    fastify.get('/recipes/add', async (request, reply) => {
      reply.send('Here will be the form to add a recipe');
    });
  
    done();
  }
  
  export default routes;