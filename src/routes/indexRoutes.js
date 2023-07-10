// Import routes
import ingredientRoutes from './ingredientRoutes.js';
import recipeRoutes from './recipeRoutes.js';
import regionRoutes from './regionRoutes.js';

// Register routes
function routes(fastify, options, done) {
  fastify.register(ingredientRoutes);
  fastify.register(recipeRoutes);
  fastify.register(regionRoutes);

  done();
}

// Export routes
export default routes;