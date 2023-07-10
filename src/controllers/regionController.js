import RegionService from '../services/regionService.js';

class RegionController {
    async createRegion(req, reply) {
        const region = await RegionService.createRegion(req.body);
        reply.code(201).send(region);
    }

    async getRegion(req, reply) {
        const region = await RegionService.getRegion(req.params.id);
        reply.send(region);
    }

    async getAllRegions(req, reply) {
        const { page, perPage } = req.query;
        const regions = await RegionService.getAllRegion(page, perPage);
        reply.send(regions);
    }

    async updateRegion(req, reply) {
        const region = await RegionService.updateRegion(req.params.id, req.body);
        reply.send(region);
    }

    async removeRegion(req, reply) {
        await RegionService.removeRegion(req.params.id);
        reply.code(204).send();
    }

    async getChildren(req, reply) {
        const children = await RegionService.getChildren(req.params.id);
        reply.send(children);
    }

    async getParent(req, reply) {
        const parent = await RegionService.getParent(req.params.id);
        reply.send(parent);
    }

    async moveRegion(req, reply) {
        const region = await RegionService.moveRegion(req.params.id, req.body.newParentId);
        reply.send(region);
    }
}

// FEATURE: Add a method to filter regions by specific criteria (e.g., name, description) //SERVICE

// IMPROVE: Implement try-catch error-handling to better manage exceptions.

// FEATURE: Implement sorting for the 'getAllRegions' method. //SERVICE

// IMPROVE: Implement input validation in controller methods.

// IMPACTS-OTHERS: Implement pagination in the 'getAllRegions' method. //SERVICE

// IMPACTS-OTHERS: Restrict certain actions (e.g., creating, deleting regions) to users with specific roles (e.g., admin). //SERVICE

export default new RegionController();