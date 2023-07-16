import UnitService from '../services/unitService.js';
import { errorHandler } from '../utils/errorHandler.js';

class UnitController {
    async createUnit(req, reply) {
        try {
            const unit = await UnitService.createUnit(req.body);
            reply.code(201).send(unit);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getUnit(req, reply) {
        try {
            const unit = await UnitService.getUnit(req.params.id);
            reply.send(unit);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getAllUnits(req, reply) {
        try {
            const { page, perPage } = req.query;
            const units = await UnitService.getAllUnit(page, perPage); 
            reply.send(units);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }
    async updateUnit(req, reply) {
        try {
            const unit = await UnitService.updateUnit(req.params.id, req.body);
            reply.send(unit);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async removeUnit(req, reply) {
        try {
            await UnitService.removeUnit(req.params.id);
            reply.code(204).send();
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }
    async getTotalUnitCount(req, reply) {
        try {
            const count = await UnitService.getTotalUnitCount();       
            reply.send({ count });
        } catch (error) {
            errorHandler(error, req, reply);
        }
    },

    async searchUnits(req, reply) {
        try {
            const units = await UnitService.searchUnits(req.query.q);
            reply.send(units);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async updateUnitStatus(req, reply) {
        try {
            const unit = await UnitService.updateUnitStatus(req.params.id, req.body.status);
            reply.send(unit);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getUnitsByStatus(req, reply) {
        try {
            const units = await UnitService.getUnitsByStatus(req.params.status);
            reply.send(units);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getUnitsByType(req, reply) {
        try {
            const units = await UnitService.getUnitsByType(req.params.type);
            reply.send(units);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }

    async getUnitsByBase(req, reply) {
        try {
            const units = await UnitService.getUnitsByBase(req.params.baseUnit);
            reply.send(units);
        } catch (error) {
            errorHandler(error, req, reply);
        }
    }
}

export default new UnitController();
