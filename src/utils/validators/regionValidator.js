import Region from '../../models/regionModel.js';

/**
 * Validates the provided region ID.
 *
 * @function
 * @name validateRegionId
 * @param {string} val - The region ID to validate.
 * @returns {Promise<boolean>} Returns `true` if the region ID is valid, `false` otherwise.
 */
export async function validateRegionId(val) {
    if (val === null) return true;
    return await Region.findById(val) !== null;
}
  