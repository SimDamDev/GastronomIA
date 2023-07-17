// Import necessary modules
import mongoose from 'mongoose';
import {tasteNoteEnum, nutriScoreEnum, monthEnum} from '../../config/constants.js';


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
  units: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
    }],
    required: true,
    // validate: [arrayLimit, '{PATH} needs at least 1 unit']
  },
  nutritionalValues: {
    // Nutritional values per 100g of the ingredient.
    calories: Number, 
    proteins: Number, 
    carbs: Number, 
    fats: Number, 
    fiber: Number, 
    sugar: Number, 
    sodium: Number, 
  },
  nutriScore: {
    // The Nutri-Score of the ingredient. This is not required.
    type: String,
    enum: nutriScoreEnum,
    required: false,
  },
  category: [{
    // The category of the ingredient. This is a reference to an IngredientCategory document.
    // If no category is provided, the default category is used.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ingredientCategory',
    default: ''/* Default category ID */,
  }],
  image: {
    type: String,
    default: ''/* Default image URL */,
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
  density: {
    type: Number,
    required: false, // need this for conversion between units in g/mL
  },
});

// Create the model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Export the model
export default Ingredient;
