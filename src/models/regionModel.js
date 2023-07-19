import mongoose from 'mongoose';
import {validateRegionId} from '../utils/validators/arrayValidator.js';

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    // The description of the region. This is not required.
    type: String,
    required: false,
  },
  parent: {
    // The parent of the region. This is a reference to another Region document.
    // This is not required, but if it is provided, it must be a valid region ID.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required: false,
    validate: {
      validator: validateRegionId,
      message: (props) => `No such region with id ${props.value}`,
    },
  },
});

const Region = mongoose.model('Region', regionSchema);

export default Region;
