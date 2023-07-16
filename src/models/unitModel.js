// Import necessary modules
import mongoose from 'mongoose';
import {config} from '../../config/config.js';
import { unitType } from '../../config/constants.js'; 

const unitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    abbreviation: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        enum: Object.values(unitType),
        required: false,
    },
    conversionFactor: { // Conversion factor to base unit
      type: Number,
      required: false,
      validate: {
        validator: Number.isPositive,
        message: 'Conversion factor must be a positive number'
      },
    },
    baseUnit: { // Base unit g or mL
        type: String,
        required: true,
      },
    icon: {
      type: String,
      required: config.requireUnitIcons,
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