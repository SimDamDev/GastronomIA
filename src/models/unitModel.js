// Import necessary modules
import mongoose from 'mongoose';
import config from '../../config/config.js';

const unitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      // IMPROVE: Add validation to ensure name is unique
    },
    abbreviation: {
      type: String,
      required: true,
      // IMPROVE: Add validation to ensure abbreviation is unique
    },
    type: {
        type: String,
        enum: Object.values(unitType),
        required: false,
        // IMPROVE: Add custom error message for invalid type
      },
      conversionFactor: { // Conversion factor to base unit
      type: Number,
      required: false,
      // IMPROVE: Add validation to ensure averageVolume is a positive number
    },
    baseUnit: { // Base unit g or mL
        type: String,
        required: true,
      },
    icon: {
      type: String,
      required: config.requireUnitIcons,
      // IMPROVE: Add validation to ensure icon is a valid URL
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  });

// Create the model
const Unit = mongoose.model('Unit', unitSchema);

// Export the model
export default Unit;

//FEATURE: Add a field for the country or region where this unit is commonly used
//FEATURE: Add a field for notes or additional information about the unit
//FEATURE: Add a field for the date when the unit was added or last updated
//FEATURE: Add a field for the user who added or last updated the unit
