import mongoose from 'mongoose';

const ingredientCategorySchema = new mongoose.Schema({
  name: {
    // The name of the ingredient category. This is required and must be unique.
    type: String,
    required: true,
    unique: true,
  },
  description: {
    // The description of the ingredient category. This is not required.
    type: String,
    required: false,
  },
  image: {
    // The image for the ingredient category. This is not required.
    type: String,
    required: false,
  },
});

const IngredientCategory = mongoose.model('IngredientCategory', ingredientCategorySchema);

export default IngredientCategory;
