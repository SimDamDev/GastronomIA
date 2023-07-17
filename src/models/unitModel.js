// Import necessary modules
import mongoose from 'mongoose';
import {config} from '../../config/config.js';
import {unitType} from '../../config/constants.js';
import {isPositiveNumber} from '../utils/validators.js';

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
  conversionFactor: { 
    // Conversion factor to base unit. This must be a positive number.
    type: Number,
    required: false,
    validate: {
      validator: isPositiveNumber,
      message: 'Conversion factor must be a positive number',
    },
  },
  icon: {
    // The icon for the unit. This is required only if config.requireUnitIcons is true.
    type: String,
    required: config.requireUnitIcons,
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
