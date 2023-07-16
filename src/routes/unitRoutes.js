
import UnitController from '../controllers/unitController.js';

// Define all routes for units
function routes(fastify, options, done) {

    // GET routes
    // Get a unit by id
    fastify.get('/units/:id', UnitController.getUnit);
    // Get all units
    fastify.get('/units', UnitController.getAllUnits);
    // Get total count of units
    fastify.get('/units/count', UnitController.getTotalUnitCount);
    // Search units
    // Get a unit by id
    fastify.get('/units/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' },
                },
            },
        },
    }, UnitController.getUnit);
    // Get units by status
    fastify.get('/units/status/:status', {
        schema: {
            params: {
                type: 'object',
                required: ['status'],
                properties: {
                    status: { type: 'boolean' },
                },
            },
        },
    }, UnitController.getUnitsByStatus);
    // Get units by type
    fastify.get('/units/type/:type', {
        schema: {
            params: {
                type: 'object',
                required: ['type'],
                properties: {
                    type: { type: 'string' },
                },
            },
        },
    }, UnitController.getUnitsByType);
    // Get units by base unit
    fastify.get('/units/base/:baseUnit', {
        schema: {
            params: {
                type: 'object',
                required: ['baseUnit'],
                properties: {
                    baseUnit: { type: 'string' },
                },
            },
        },
    }, UnitController.getUnitsByBase);
    // POST routes
    // Create a new unit
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

    // PUT routes
    // Update a unit
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

    // PATCH routes
    // Update unit status
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

    // DELETE routes
    // Remove a unit
    fastify.delete('/units/:id', UnitController.removeUnit);

    done();
}

export default routes;
