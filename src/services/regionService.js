import Region from '../models/regionModel.js';

class RegionService {
  async createRegion(data) {
    const region = new Region(data);
    await region.save();
    return region;
  }

  async getRegion(id) {
    const region = await Region.findById(id)
    return region;
  }

  async getAllRegion(){
    const regions = await Region.find()
    return regions
  }

  async updateRegion(id, data){
    const filter = { _id: id };
    const update = { $set: data };
    const region = await Region.findOneAndUpdate(filter, update, { new: true });
    return region;
  }

  async removeRegion(id){
    const region = await Region.findByIdAndDelete(id)
    return region;
  }

  async getChildren(id){
    const children = await Region.find({ parent: id });
    return children;
  }

  async getParent(id){
    const region = await Region.findById(id);
    const parent = await Region.findById(region.parent);
    return parent;
  }

  async moveRegion(id, newParentId){
    const region = await Region.findById(id);
    region.parent = newParentId;
    await region.save();
    return region;
  }


}

export default new RegionService();