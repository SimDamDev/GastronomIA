/**
 * This file contains the UnitService class.
 */

import { Unit } from '../../models/indexModel.js';
import { errorHandler } from '../../utils/errorHandler.js';
import { paginate } from '../utils/pagination.js';

/**
 * Class representing the service for units.
 */
class UnitService {
  /**
   * Create a unit.
   * @param {Object} data - The data to create the unit with.
   * @returns {Promise<Object>} The created unit.
   * @throws {Error} If there is an error creating the unit.
   */
  async createUnit(data) {
    try {
      const unit = new Unit(data);
      await unit.save();
      return unit;
    } catch (error) {
      errorHandler(error);
    }
  }

  /**
   * Get a unit by ID.
   * @param {string} id - The ID of the unit to get.
   * @returns {Promise<Object>} The unit.
   */
  async getUnit(id) {
    const unit = await Unit.findById(id);
    return unit;
  }

  /**
   * Get all units with pagination.
   * @param {number} page - The page number.
   * @param {number} perPage - The number of items per page.
   * @returns {Promise<Array>} The units.
   */
  async getAllUnit(page, perPage) {
    const units = await paginate(Unit.find(), page, perPage);
    return units;
  }

  /**
   * Update a unit.
   * @param {string} id - The ID of the unit to update.
   * @param {Object} data - The data to update the unit with.
   * @returns {Promise<Object>} The updated unit.
   * @throws {Error} If the unit name is not unique.
   */
  async updateUnit(id, data) {
    try {
      const filter = {_id: id};
      const update = {$set: data};
      const unit = await Unit.findOneAndUpdate(filter, update, {new: true});
      return unit;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Unit name must be unique');
      }
      throw error;
    }
  }

  /**
   * Remove a unit.
   * @param {string} id - The ID of the unit to remove.
   * @returns {Promise<Object>} The removed unit.
   * @throws {Error} If there is an error removing the unit.
   */
  async removeUnit(id) {
    try {
      const unit = await Unit.findByIdAndDelete(id);
      return unit;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get the total count of units.
   * @returns {Promise<number>} The total count of units.
   */
  async getTotalUnitCount() {
    const count = await Unit.countDocuments();
    return count;
  }

  /**
   * Search units.
   * @param {string} query - The search query.
   * @returns {Promise<Array>} The units that match the search query.
   */
  async searchUnits(query) {
    const units = await Unit.find({
      $or: [
        {name: {$regex: query, $options: 'i'}},
        {description: {$regex: query, $options: 'i'}},
      ],
    });
    return units;
  }

  /**
   * Update the status of a unit.
   * @param {string} id - The ID of the unit to update.
   * @param {boolean} status - The new status of the unit.
   * @returns {Promise<Object>} The updated unit.
   */
  async updateUnitStatus(id, status) {
    const filter = {_id: id};
    const update = {$set: {isActive: status}};
    const unit = await Unit.findOneAndUpdate(filter, update, {new: true});
    return unit;
  }

  /**
   * Get units by status.
   * @param {boolean} status - The status to filter units by.
   * @returns {Promise<Array>} The units that match the status.
   */
  async getUnitsByStatus(status) {
    return Unit.find({isActive: status});
  }

  /**
   * Get units by type.
   * @param {string} type - The type to filter units by.
   * @returns {Promise<Array>} The units that match the type.
   */
  async getUnitsByType(type) {
    const units = await Unit.find({type: type});
    return units;
  }

  /**
   * Get units by base unit.
   * @param {string} baseUnit - The base unit to filter units by.
   * @returns {Promise<Array>} The units that match the base unit.
   */
  async getUnitsByBase(baseUnit) {
    return Unit.find({baseUnit: baseUnit});
  }
}

export default new UnitService();
