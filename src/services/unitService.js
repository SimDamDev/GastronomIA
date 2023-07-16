import Unit from '../models/unitModel.js'

class UnitService {
    async createUnit(data){
    const unit = new Unit(data);
    await unit.save();
    return unit;
    }

    async getUnit(id){
        const unit = await Unit.findById(id)
        return unit;
    }

    async getAllUnit(page, perPage){
        const units = await Unit.find().skip((page - 1) * perPage).limit(perPage);
        return units
    }

    async updateUnit(id, data){
        const filter = { _id: id };
        const update = { $set: data };
        const unit = await Unit.findOneAndUpdate(filter, update, { new: true });
        return unit;
    }

    async removeUnit(id){
        const unit = await Unit.findByIdAndDelete(id)
        return unit;
    }

    async getTotalUnitCount(){
        const count = await Unit.countDocuments();
        return count;
    }

    async searchUnits(query){
        const units = await Unit.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        return units;
    }

    async updateUnitStatus(id, status){
        const filter = { _id: id };
        const update = { $set: { isActive: status }};
        const unit = await Unit.findOneAndUpdate(filter, update, { new: true });
        return unit;
    }

    async getUnitsByStatus(status){
        return Unit.find({ isActive: status });
    }

    async getUnitsByType(type){
        const units = await Unit.find({type: type});
        return units;
    }

    async getUnitsByBase(baseUnit){
        return Unit.find({ baseUnit: baseUnit });
    }

}

export default new UnitService();