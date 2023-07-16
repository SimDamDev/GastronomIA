import RegionService from '../services/regionService.js';
import { errorHandler } from '../utils/errorHandler.js';

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
        try {
            const region = await RegionService.getRegion(req.params.id);
            reply.send(region);
        } catch (error) {
            errorHandler(error, req, reply);
        }
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
        try {
            const region = await RegionService.updateRegion(req.params.id, req.body);
            reply.send(region);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async removeRegion(req, reply) {
        try {
            await RegionService.removeRegion(req.params.id);
            reply.code(204).send();
        } catch (error) {
            errorHandler(error, req, reply);
        }
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