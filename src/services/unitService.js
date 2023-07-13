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

    async getInactiveUnits(){
        return Unit.find({ isActive: false });
    }

    async getActiveUnits(){
        return Unit.find({ isActive: true });
    }

    async getUnitsByType(type){
        const units = await Unit.find({type: type});
        return units;
    }

    async getUnitsByBase(baseUnit){
        return Unit.find({ baseUnit: baseUnit });
    }

   // IMPROVE: Add validations to ensure data integrity during unit creation and update
  
   // IMPROVE: Handle errors and exceptions during CRUD operations for better error management

   // FEATURE: Integrate authentication and authorization mechanisms to secure sensitive operations

   // IMPROVE: Add advanced pagination to 'getAllUnit' service, with the ability to sort and filter units.
  
   // IMPACTS-OTHERS: Restrict certain actions (e.g., creating, deleting units) to users with specific roles (e.g., admin). //CONTROLLER

   // IMPROVE: Replace hard-coded string values (like 'i' for case-insensitivity) with constants for better code readability and maintainability.
  
   // FEATURE: Add functionality to convert units
    
}

export default new UnitService();
