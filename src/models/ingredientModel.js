// Import necessary modules
import mongoose from 'mongoose';
import { tasteNoteEnum, nutriScoreEnum, monthEnum } from '../../config/constants.js';
import { arrayLimit } from '../utils/validators.js';


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
    validate: [arrayLimit, '{PATH} needs at least 1 unit']
  },
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
    default: ""/* Default category ID */,
  }],
  image: {
    type: String,
    default: ""/* Default image URL */,
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
    required: false, //need this for conversion between units in g/mL
  },
});

// Create the model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Export the model
export default Ingredient;