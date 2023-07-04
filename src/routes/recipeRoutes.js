import { getRecipes, addRecipe } from '../controllers/indexController.js';

function routes(fastify, options, done) {
    
    fastify.get('/recipes', async (request, reply) => {
        return getRecipes(request, reply);
    });

    fastify.get('/recipe/add', async (request, reply) => {
        return addRecipe(request, reply);
    });
    
    done();

}

export default routes;