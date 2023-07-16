import UnitController from '../controllers/unitController.js';

function routes(fastify, options, done) {

    fastify.post('/units', {
        schema: {
            body: {
                type: 'object',
                required: ['name', 'abbreviation', 'baseUnit'],
                properties: {
                    name: { type: 'string' },
                    abbreviation: { type: 'string' },
                    type: { type: 'string' },
                    conversionFactor: { type: 'number' },
                    baseUnit: { type: 'string' },
                    icon: { type: 'string' },
                    isActive: { type: 'boolean' },
                },
            },
        },
    }, UnitController.createUnit);

    fastify.get('/units/:id', UnitController.getUnit);

    fastify.get('/units', UnitController.getAllUnits);

    fastify.put('/units/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' },
                },
            },
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    abbreviation: { type: 'string' },
                    type: { type: 'string' },
                    conversionFactor: { type: 'number' },
                    baseUnit: { type: 'string' },
                    icon: { type: 'string' },
                    isActive: { type: 'boolean' },
                },
            },
        },
    }, UnitController.updateUnit);

    fastify.delete('/units/:id', UnitController.removeUnit);

    fastify.get('/units/count', UnitController.getTotalUnitCount);

    fastify.get('/units/search', UnitController.searchUnits);

    fastify.patch('/units/:id/status', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' },
                },
            },
            body: {
                type: 'object',
                required: ['status'],
                properties: {
                    status: { type: 'boolean' },
                },
            },
        },
    }, UnitController.updateUnitStatus);

    fastify.get('/units/status/:status', UnitController.getUnitsByStatus);

    fastify.get('/units/type/:type', UnitController.getUnitsByType);

    fastify.get('/units/base/:baseUnit', UnitController.getUnitsByBase);

    done();
}

export default routes;
