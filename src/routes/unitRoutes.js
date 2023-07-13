import UnitController from '../controllers/unitController';

function routes(fastify, options, done) {

    fastify.post('/units', UnitController.createUnit);

    fastify.get('/units/:id', UnitController.getUnit);

    fastify.get('/units', UnitController.getAllUnits);

    fastify.put('/units/:id', UnitController.updateUnit);

    fastify.delete('/units/:id', UnitController.removeUnit);

    fastify.get('/units/count', UnitController.getTotalUnitCount);

    fastify.get('/units/search', UnitController.searchUnits);

    fastify.patch('/units/:id/status', UnitController.updateUnitStatus);

    fastify.get('/units/inactive', UnitController.getInactiveUnits);

    fastify.get('/units/active', UnitController.getActiveUnits);

    fastify.get('/units/type/:type', UnitController.getUnitsByType);

    fastify.get('/units/base/:baseUnit', UnitController.getUnitsByBase);

    done();
}

// IMPROVE: Add authentication middleware to routes that should be protected

    // FEATURE: Add rate limiting to prevent abuse of the API

    // IMPROVE: Use a route prefix or versioning to help manage future changes

    // IMPACTS-OTHERS: Ensure routes that modify data (POST, PUT, PATCH, DELETE) have proper authorization checks

    // FEATURE: Use HTTP caching where applicable to improve performance

    // IMPROVE: Organize routes into separate files based on resource type for better maintainability

    // FEATURE: Add more robust error handling and return appropriate HTTP status codes

export default routes;
