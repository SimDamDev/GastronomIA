import UnitService from '../services/unitService.js';

class UnitController {
    async createUnit(req, reply) {
        try {
            const unit = await UnitService.createUnit(req.body);
            reply.code(201).send(unit);
        } catch (error) {
            reply.code(400).send({ error: error.message });
        }
    }

    async getUnit(req, reply) {
        const unit = await UnitService.getUnit(req.params.id);
        reply.send(unit);
    }

    async getAllUnits(req, reply) {
        const { page, perPage } = req.query;
        const units = await UnitService.getAllUnit(page, perPage);
        reply.send(units);
    }

    async updateUnit(req, reply) {
        try {
            const unit = await UnitService.updateUnit(req.params.id, req.body);
            reply.send(unit);
        } catch (error) {
            reply.code(400).send({ error: error.message });
        }
    }

    async removeUnit(req, reply) {
        try {
            await UnitService.removeUnit(req.params.id);
            reply.code(204).send();
        } catch (error) {
            reply.code(400).send({ error: error.message });
        }
    }

    async getTotalUnitCount(req, reply) {
        const count = await UnitService.getTotalUnitCount();
        reply.send({ count });
    }

    async searchUnits(req, reply) {
        const units = await UnitService.searchUnits(req.query.q);
        reply.send(units);
    }

    async updateUnitStatus(req, reply) {
        const unit = await UnitService.updateUnitStatus(req.params.id, req.body.status);
        reply.send(unit);
    }

    async getUnitsByStatus(req, reply) {
        const units = await UnitService.getUnitsByStatus(req.params.status);
        reply.send(units);
    }

    async getUnitsByType(req, reply) {
        const units = await UnitService.getUnitsByType(req.params.type);
        reply.send(units);
    }

    async getUnitsByBase(req, reply) {
        const units = await UnitService.getUnitsByBase(req.params.baseUnit);
        reply.send(units);
    }
}

export default new UnitController();
