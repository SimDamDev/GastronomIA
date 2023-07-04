// Import necessary modules
import mongoose from 'mongoose';
import { tasteNoteEnum, nutriScoreEnum } from '../../config/constants';


// Define the Ingredient schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pluralName: {
    type: String,
    required: false,
  },
  units: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit-ingredient',
  }],
  nutritionalValues: {
    calories: Number, // Calories par 100g
    proteins: Number, // Protéines par 100g
    carbs: Number, // Glucides par 100g
    fats: Number, // Lipides par 100g
    fiber: Number, // Fibres par 100g
    sugar: Number, // Sucres par 100g
    sodium: Number, // Sodium par 100g
  },
  nutriScore: {
    type: String,
    enum: nutriScoreEnum,
    required: false,
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category-ingredient',
  }],
  image: {
    type: String,
    required: false,
  },
  seasonality: [{
    region: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Region',
    },
    months: [{
      type: String,
      enum: monthEnum,
    }],
  }],
  tasteNote: {
    type: String,
    enum: tasteNoteEnum,
    required: false,
  },
});

// Create the model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Export the model
export default Ingredient;
