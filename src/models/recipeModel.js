// Import necessary modules
import mongoose from 'mongoose';

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
  }],
  // Add more fields as necessary
});

// Create the model
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the model
export default Recipe;
