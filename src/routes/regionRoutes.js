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

export default routes;