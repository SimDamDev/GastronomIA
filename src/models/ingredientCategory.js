import mongoose from 'mongoose';

const ingredientCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const IngredientCategory = mongoose.model('IngredientCategory', ingredientCategorySchema);

export default IngredientCategory;
