import mongoose from 'mongoose';

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
      validator: async function(v) {
        if (v === null) return true;
        return await Region.findById(v) !== null;
      },
      message: props => `No such region with id ${props.value}`
    },
  },
});

const Region = mongoose.model('Region', regionSchema);

export default Region;
