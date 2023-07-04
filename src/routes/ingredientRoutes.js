import { getIngredients, addIngredient } from '../controllers/indexController.js';

function routes(fastify, options, done) {
    
    fastify.get('/ingredients', async (request, reply) => {
        return getIngredients(request, reply);
    });

    fastify.get('/ingredient/add', async (request, reply) => {
        return addIngredient(request, reply);
    });

    done();

}

export default routes;