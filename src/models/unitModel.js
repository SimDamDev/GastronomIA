// Import necessary modules
import mongoose from 'mongoose';
import config from '../../config/config.js';

const unitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
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
      averageVolume: {
      type: Number,
      required: false,
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