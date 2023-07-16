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
        } catch (error) {
            errorHandler(error, req, reply);
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
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async searchRegions(req, reply) {
        try {
            const regions = await RegionService.searchRegions(req.query.q);
            reply.send(regions);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getChildren(req, reply) {
        try {
            const children = await RegionService.getChildren(req.params.id);
            reply.send(children);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getParent(req, reply) {
        try {
            const parent = await RegionService.getParent(req.params.id);
            reply.send(parent);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async moveRegion(req, reply) {
        try {
            const region = await RegionService.moveRegion(req.params.id, req.body.newParentId);
            reply.send(region);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }
}

export default new RegionController();