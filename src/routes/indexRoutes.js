// Import routes
import ingredientRoutes from './ingredientRoutes.js';
import recipeRoutes from './recipeRoutes.js';
import regionRoutes from './regionRoutes.js';
import unitRoutes from '../unit/routes.js';
import configRoutes from './configRoutes.js';


// Register routes
function routes(fastify, options, done) {
  fastify.register(ingredientRoutes);
  fastify.register(recipeRoutes);
  fastify.register(regionRoutes);
  fastify.register(unitRoutes);
  fastify.register(configRoutes);

  done();
}

// Export routes
export default routes;
