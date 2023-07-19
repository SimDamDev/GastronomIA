import Region from '../../../models/regionModel.js';

export async function validateRegionId(val) {
    if (val === null) return true;
    return await Region.findById(val) !== null;
  }
  