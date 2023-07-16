export function isNotEmptyArray(val) {
    return val.length > 0;
  }import Region from '../models/regionModel.js';

async function validateRegionId(v) {
  if (v === null) return true;
  return await Region.findById(v) !== null;
}

export { validateRegionId };
