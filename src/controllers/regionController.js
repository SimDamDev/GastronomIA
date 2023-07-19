/**
 * Import RegionService for region operations
 */
import RegionService from '../services/modelServices/regionService.js';

/**
 * Import errorHandler for handling errors
 */
import {errorHandler} from '../utils/errorHandler.js';

class RegionController {
  /**
   * Create a new region
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async createRegion(req, reply) {
    try {
      const region = await RegionService.createRegion(req.body);
      reply.code(201).send(region);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Get a region by ID
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async getRegion(req, reply) {
    try {
      const region = await RegionService.getRegion(req.params.id);
      reply.send(region);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Get all regions
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async getAllRegions(req, reply) {
    try {
      const {page, perPage} = req.query;
      const regions = await RegionService.getAllRegion(page, perPage);
      reply.send(regions);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Update a region
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async updateRegion(req, reply) {
    try {
      const region = await RegionService.updateRegion(req.params.id, req.body);
      reply.send(region);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Remove a region
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async removeRegion(req, reply) {
    try {
      await RegionService.removeRegion(req.params.id);
      reply.code(204).send();
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Get the total count of regions
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async getTotalRegionCount(req, reply) {
    try {
      const count = await RegionService.getTotalRegionCount();
      reply.send({count});
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Search regions
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async searchRegions(req, reply) {
    try {
      const regions = await RegionService.searchRegions(req.query.q);
      reply.send(regions);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Get the children of a region
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async getChildren(req, reply) {
    try {
      const children = await RegionService.getChildren(req.params.id);
      reply.send(children);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Get the parent of a region
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async getParent(req, reply) {
    try {
      const parent = await RegionService.getParent(req.params.id);
      reply.send(parent);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }

  /**
   * Move a region to a new parent
   * @param {*} req - The request object
   * @param {*} reply - The reply object
   */
  async moveRegion(req, reply) {
    try {
      const region = await RegionService.moveRegion(req.params.id, req.params.newParentId);
      reply.send(region);
    } catch (error) {
      errorHandler(error, req, reply);
    }
  }
}

export default new RegionController();
