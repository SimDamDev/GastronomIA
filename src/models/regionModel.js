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
});

const Region = mongoose.model('Region', regionSchema);

export default Region;
