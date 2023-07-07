import RegionService from '../services/regionService.js';

class RegionController {
  async createRegion(req, res) {
    const region = await RegionService.createRegion(req.body);
    res.status(201).json(region);
  }

  async getRegion(req, res) {
    const region = await RegionService.getRegion(req.params.id);
    res.json(region);
  }

  async getAllRegions(req, res) {
    const { page, perPage } = req.query;
    const regions = await RegionService.getAllRegion(page, perPage);
    res.json(regions);
  }

  async updateRegion(req, res) {
    const region = await RegionService.updateRegion(req.params.id, req.body);
    res.json(region);
  }

  async removeRegion(req, res) {
    await RegionService.removeRegion(req.params.id);
    res.status(204).end();
  }

  async getChildren(req, res) {
    const children = await RegionService.getChildren(req.params.id);
    res.json(children);
  }
  
  async getParent(req, res) {
    const parent = await RegionService.getParent(req.params.id);
    res.json(parent);
  }
  
  async moveRegion(req, res) {
    const region = await RegionService.moveRegion(req.params.id, req.body.newParentId);
    res.json(region);
  }
}

export default new RegionController();