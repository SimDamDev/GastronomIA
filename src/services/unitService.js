import { Unit } from '../models/indexModel.js';

class UnitService {
  async createUnit(data) {
import { handleError } from '../utils/helpers.js';

    try {
      const unit = new Unit(data);
      await unit.save();
      return unit;
    } catch (error) {
      handleError(error);
    }
  }

  async getUnit(id) {
    const unit = await Unit.findById(id);
    return unit;
  }

  async getAllUnit(page, perPage) {
    const units = await Unit.find().skip((page - 1) * perPage).limit(perPage);
    return units;
  }

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

  async removeUnit(id) {
    try {
      const unit = await Unit.findByIdAndDelete(id);
      return unit;
    } catch (error) {
      throw error;
    }
  }

  async getTotalUnitCount() {
    const count = await Unit.countDocuments();
    return count;
  }

  async searchUnits(query) {
    const units = await Unit.find({
      $or: [
        {name: {$regex: query, $options: 'i'}},
        {description: {$regex: query, $options: 'i'}},
      ],
    });
    return units;
  }

  async updateUnitStatus(id, status) {
    const filter = {_id: id};
    const update = {$set: {isActive: status}};
    const unit = await Unit.findOneAndUpdate(filter, update, {new: true});
    return unit;
  }

  async getUnitsByStatus(status) {
    return Unit.find({isActive: status});
  }

  async getUnitsByType(type) {
    const units = await Unit.find({type: type});
    return units;
  }

  async getUnitsByBase(baseUnit) {
    return Unit.find({baseUnit: baseUnit});
  }
}

export default new UnitService();
