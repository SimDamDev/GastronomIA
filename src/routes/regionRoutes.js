import RegionController from '../controllers/regionController.js';

function routes(fastify, options, done) {
    
    fastify.post('/regions', {
        schema: {
            body: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                    parent: { type: 'string' },
                },
            },
        },
    }, RegionController.createRegion);

    fastify.get('/regions/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' },
                },
            },
        },
    }, RegionController.getRegion);

    fastify.get('/regions', RegionController.getAllRegions);

    fastify.put('/regions/:id', RegionController.updateRegion);

    fastify.delete('/regions/:id', RegionController.removeRegion);

    fastify.get('/regions/count', RegionController.getTotalRegionCount);

    fastify.get('/regions/search', RegionController.searchRegions);

    fastify.get('/regions/:id/children', RegionController.getChildren);

    fastify.get('/regions/:id/parent', RegionController.getParent);

    fastify.patch('/regions/:id/move', RegionController.moveRegion);
    
    done();
}

export default routes;