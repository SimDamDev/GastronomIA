// Import routes
import ingredientRoutes from './ingredientRoutes.js';
import recipeRoutes from './recipeRoutes.js';

// Register routes
function routes(fastify, options, done) {
  fastify.register(ingredientRoutes);
  fastify.register(recipeRoutes);

  done();
}

// Export routes
export default routes;