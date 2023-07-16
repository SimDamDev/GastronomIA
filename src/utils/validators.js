export function isNotEmptyArray(val) {
    return val.length > 0;
  }import Region from '../models/regionModel.js';

async function validateRegionId(val) {
  if (val === null) return true;
  return await Region.findById(val) !== null;
}

export { validateRegionId };
