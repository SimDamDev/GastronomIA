import RegionService from '../services/regionService.js';

class RegionController {
    async createRegion(req, reply) {
        try {
            const region = await RegionService.createRegion(req.body);
            reply.code(201).send(region);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getRegion(req, reply) {
        const region = await RegionService.getRegion(req.params.id);
        reply.send(region);
    }

    async getAllRegions(req, reply) {
        try {
            const { page, perPage } = req.query;
            const regions = await RegionService.getAllRegion(page, perPage);
            reply.send(regions);
        } catch (err) {
            reply.send(err);
        }
    }

    async updateRegion(req, reply) {
        const region = await RegionService.updateRegion(req.params.id, req.body);
        reply.send(region);
    }

    async removeRegion(req, reply) {
        await RegionService.removeRegion(req.params.id);
        reply.code(204).send();
    }

    async getTotalRegionCount(req, reply) {
        try {
            const count = await RegionService.getTotalRegionCount();   
            reply.send({ count });
        } catch (err) {
            reply.send(err);
        }
    }

    async searchRegions(req, reply) {
        const regions = await RegionService.searchRegions(req.query.q);
        reply.send(regions);
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

export default new RegionController();