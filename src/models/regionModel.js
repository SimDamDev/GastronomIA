import mongoose from 'mongoose';
import {validateRegionId} from '../utils/validators.js';

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  parent: {
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
