// Import necessary modules
import { unitType } from '../../config/constants.js';

// Define the route
const configRoutes = async (fastify, options) => {
  fastify.get('/constants', async (request, reply) => {
    return { unitType };
  })
}

export default configRoutes;