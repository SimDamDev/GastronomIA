// Import necessary modules
import mongoose from 'mongoose';

// Define the Ingredient schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Add more fields as necessary
});

// Create the model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Export the model
export default Ingredient;
