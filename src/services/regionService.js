import { Region } from '../models/indexModel.js';

class RegionService {
  async createRegion(data) {
    try {
      const region = new Region(data);
      await region.save();
      return region;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Region name must be unique');
      }
      throw error;
    }
  }

  async getRegion(id) {
    const region = await Region.findById(id);
    if (!region) {
      throw new Error(`No such region with id ${id}`);
    }
    return region;
  }

  async getAllRegion(page, perPage) {
    const regions = await Region.find().skip((page - 1) * perPage).limit(perPage);
    return regions;
  }


  async updateRegion(id, data) {
    const filter = {_id: id};
    const update = {$set: data};
    const updatedRegion = await Region.findOneAndUpdate(filter, update, {new: true});
    return updatedRegion;
  }


  async removeRegion(id) {
    const removedRegion = await Region.findByIdAndDelete(id);
    if (!removedRegion) {
      throw new Error(`No such region with id ${id}`);
    }
    return removedRegion;
  }

  async getTotalRegionCount() {
    const count = await Region.countDocuments();
    return count;
  }

  async searchRegions(query) {
    const regions = await Region.find({
      $or: [
        {name: {$regex: query, $options: 'i'}},
        {description: {$regex: query, $options: 'i'}},
      ],
    });
    return regions;
  }

  async getChildren(id) {
    const children = await Region.find({parent: id});
    return children;
  }

  async getParent(id) {
    const region = await Region.findById(id);
    const parent = await Region.findById(region.parent);
    return parent;
  }

  async moveRegion(id, newParentId) {
    const filter = {_id: id};
    const update = {$set: {parent: newParentId}};
    const region = await Region.findOneAndUpdate(filter, update, {new: true});
    return region;
  }
}

export default new RegionService();
