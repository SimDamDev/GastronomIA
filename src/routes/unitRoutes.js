
import UnitController from '../controllers/unitController.js';

// Define all routes for units
function routes(fastify, options, done) {
  fastify.get('/units/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
    },
  }, UnitController.getUnit);

  fastify.get('/units', {
    schema: {
      querystring: {
        type: 'object',
        additionalProperties: false,
      },
    },
  }, UnitController.getAllUnits);

  fastify.get('/units/count', {
    schema: {
      querystring: {
        type: 'object',
        additionalProperties: false,
      },
    },
  }, UnitController.getTotalUnitCount);

  fastify.get('/units/status/:status', {
    schema: {
      params: {
        type: 'object',
        required: ['status'],
        properties: {
          status: {type: 'boolean'},
        },
      },
    },
  }, UnitController.getUnitsByStatus);

  fastify.get('/units/type/:type', {
    schema: {
      params: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {type: 'string'},
        },
      },
    },
  }, UnitController.getUnitsByType);

  fastify.get('/units/base/:baseUnit', {
    schema: {
      params: {
        type: 'object',
        required: ['baseUnit'],
        properties: {
          baseUnit: {type: 'string'},
        },
      },
    },
  }, UnitController.getUnitsByBase);

  fastify.post('/units', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'abbreviation', 'baseUnit'],
        properties: {
          name: {type: 'string'},
          abbreviation: {type: 'string'},
          type: {type: 'string'},
          conversionFactor: {type: 'number'},
          baseUnit: {type: 'string'},
          icon: {type: 'string'},
          isActive: {type: 'boolean'},
        },
      },
    },
  }, UnitController.createUnit);

  fastify.put('/units/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
      body: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          abbreviation: {type: 'string'},
          type: {type: 'string'},
          conversionFactor: {type: 'number'},
          baseUnit: {type: 'string'},
          icon: {type: 'string'},
          isActive: {type: 'boolean'},
        },
      },
    },
  }, UnitController.updateUnit);

  fastify.patch('/units/:id/status', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
      body: {
        type: 'object',
        required: ['status'],
        properties: {
          status: {type: 'boolean'},
        },
      },
    },
  }, UnitController.updateUnitStatus);

  fastify.delete('/units/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
    },
  }, UnitController.removeUnit);

  done();
}

export default routes;
