import RegionController from '../controllers/regionController.js';

function routes(fastify, options, done) {
    
    fastify.post('/regions', RegionController.createRegion);

    fastify.get('/regions/:id', RegionController.getRegion);

    fastify.get('/regions', RegionController.getAllRegions);

    fastify.put('/regions/:id', RegionController.updateRegion);

    fastify.delete('/regions/:id', RegionController.removeRegion);

    fastify.get('/regions/:id/children', RegionController.getChildren);

    fastify.get('/regions/:id/parent', RegionController.getParent);

    fastify.patch('/regions/:id/move', RegionController.moveRegion);
    
    done();
}

// IMPACTS-OTHERS : Implement Route-level input validation to catch errors early.

// IMPROVE: Add error handling for routes

// FEATURE: Add authentication and authorization for routes

// IMPROVE: Implement rate limiting to prevent abuse.

// IMPACTS-OTHERS: Secure sensitive routes with proper authentication and permissions.

export default routes;
