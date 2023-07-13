import UnitController from '../controllers/unitController.js';

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

export default routes;