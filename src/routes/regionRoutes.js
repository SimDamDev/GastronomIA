import RegionController from '../controllers/regionController.js';

function routes(fastify, options, done) {
  fastify.post('/regions', {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {type: 'string'},
          description: {type: 'string'},
          parent: {type: 'string'},
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
          id: {type: 'string'},
        },
      },
    },
  }, RegionController.getRegion);


  fastify.get('/regions', {
    schema: {
      querystring: {
        type: 'object',
        additionalProperties: false,
      },
    },
  }, RegionController.getAllRegions);

  fastify.put('/regions/:id', {
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
          description: {type: 'string'},
          parent: {type: 'string'},
        },
      },
    },
  }, RegionController.updateRegion);

  fastify.delete('/regions/:id', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
    },
  }, RegionController.removeRegion);

  fastify.get('/regions/count', {
    schema: {
      querystring: {
        type: 'object',
        additionalProperties: false,
      },
    },
  }, RegionController.getTotalRegionCount);

  fastify.get('/regions/search', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          q: {type: 'string'},
        },
      },
    },
  }, RegionController.searchRegions);

  fastify.get('/regions/:id/children', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
    },
  }, RegionController.getChildren);

  fastify.get('/regions/:id/parent', {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {type: 'string'},
        },
      },
    },
  }, RegionController.getParent);

  fastify.patch('/regions/:id/move', {
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
        required: ['newParentId'],
        properties: {
          newParentId: {type: 'string'},
        },
      },
    },
  }, RegionController.moveRegion);

  done();
}

export default routes;
