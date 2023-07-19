/**
 * This file contains the RegionService class.
 */

import { Region } from '../../models/indexModel.js';
import { paginate } from '../utils/pagination.js';

/**
 * Class representing the service for regions.
 */
class RegionService {
  /**
   * Create a region.
   * @param {Object} data - The data to create the region with.
   * @returns {Promise<Object>} The created region.
   * @throws {Error} If the region name is not unique.
   */
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

  /**
   * Get a region by ID.
   * @param {string} id - The ID of the region to get.
   * @returns {Promise<Object>} The region.
   * @throws {Error} If no region is found with the given ID.
   */
  async getRegion(id) {
    const region = await Region.findById(id);
    if (!region) {
      throw new Error(`No such region with id ${id}`);
    }
    return region;
  }

  /**
   * Get all regions with pagination.
   * @param {number} page - The page number.
   * @param {number} perPage - The number of items per page.
   * @returns {Promise<Array>} The regions.
   */
  async getAllRegion(page, perPage) {
    const regions = await paginate(Region.find(), page, perPage);
    return regions;
  }


  /**
   * Update a region.
   * @param {string} id - The ID of the region to update.
   * @param {Object} data - The data to update the region with.
   * @returns {Promise<Object>} The updated region.
   */
  async updateRegion(id, data) {
    const filter = {_id: id};
    const update = {$set: data};
    const updatedRegion = await Region.findOneAndUpdate(filter, update, {new: true});
    return updatedRegion;
  }

  /**
   * Remove a region.
   * @param {string} id - The ID of the region to remove.
   * @returns {Promise<Object>} The removed region.
   * @throws {Error} If no region is found with the given ID.
   */
  async removeRegion(id) {
    const removedRegion = await Region.findByIdAndDelete(id);
    if (!removedRegion) {
      throw new Error(`No such region with id ${id}`);
    }
    return removedRegion;
  }

  /**
   * Get the total count of regions.
   * @returns {Promise<number>} The total count of regions.
   */
  async getTotalRegionCount() {
    const count = await Region.countDocuments();
    return count;
  }

  /**
   * Search regions.
   * @param {string} query - The search query.
   * @returns {Promise<Array>} The regions that match the search query.
   */
  async searchRegions(query) {
    const regions = await Region.find({
      $or: [
        {name: {$regex: query, $options: 'i'}},
        {description: {$regex: query, $options: 'i'}},
      ],
    });
    return regions;
  }

  /**
   * Get the children of a region.
   * @param {string} id - The ID of the region to get the children of.
   * @returns {Promise<Array>} The children of the region.
   */
  async getChildren(id) {
    const children = await Region.find({parent: id});
    return children;
  }

  /**
   * Get the parent of a region.
   * @param {string} id - The ID of the region to get the parent of.
   * @returns {Promise<Object>} The parent of the region.
   */
  async getParent(id) {
    const region = await Region.findById(id);
    const parent = await Region.findById(region.parent);
    return parent;
  }

  /**
   * Move a region to a new parent.
   * @param {string} id - The ID of the region to move.
   * @param {string} newParentId - The ID of the new parent region.
   * @returns {Promise<Object>} The moved region.
   */
  async moveRegion(id, newParentId) {
    const filter = {_id: id};
    const update = {$set: {parent: newParentId}};
    const region = await Region.findOneAndUpdate(filter, update, {new: true});
    return region;
  }
}

export default new RegionService();
