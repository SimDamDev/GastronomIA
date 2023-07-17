export function isNotEmptyArray(val) {
  return val.length > 0;
} import Region from '../models/regionModel.js';

export async function validateRegionId(val) {
  if (val === null) return true;
  return await Region.findById(val) !== null;
}

export async function isPositiveNumber(val) {
  return val > 0;
}
