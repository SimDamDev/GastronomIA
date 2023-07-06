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

  async updateRegion(){

  }

  async removeRegion(){

  }

  async getChilds(){

  }

  async getParent(){

  }

  async moveRegion(){

  }


  // ...other methods go here...
}

export default new RegionService();
