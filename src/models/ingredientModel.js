// Import necessary modules
import mongoose from 'mongoose';
import { tasteNoteEnum, nutriScoreEnum, monthEnum } from '../../config/constants.js';
import { arrayLimit } from '../utils/validators.js';

// Define the Ingredient schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // IMPROVE: Add validation to ensure name is unique
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
    calories: Number, // Calories per 100g
    proteins: Number, // Proteins per 100g
    carbs: Number, // Carbs per 100g
    fats: Number, // Fats per 100g
    fiber: Number, // Fiber per 100g
    sugar: Number, // Sugar per 100g
    sodium: Number, // Sodium per 100g
    // IMPROVE: Add validation to ensure nutritional values are positive numbers
    //FEATURE add vitamins and minerals
  },
  nutriScore: {
    type: String,
    enum: nutriScoreEnum,
    required: false,
    // IMPROVE: Add custom error message for invalid nutriScore
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category-ingredient',
    default: ""/* Default category ID */,
    // IMPROVE: Consider using null as default value or provide a default category
  }],
  image: {
    type: String,
    default: ""/* Default image URL */,
    // IMPROVE: Consider using null as default value or provide a default image
    // IMPROVE: Add validation to ensure image is a valid URL
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
    // IMPROVE: Add comments to explain what this field represents
  }],
  tasteNote: {
    type: String,
    enum: tasteNoteEnum,
    required: false,
    // IMPROVE: Add custom error message for invalid tasteNote
  },
  density: {
    type: Number,
    required: false, //need this for conversion between units in g/mL
  },
  // IMPROVE: Consider adding a virtual property to check if the ingredient is currently in season
});

// Create the model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

//FEATURE: Add a field for the origin of the ingredient
//FEATURE: Add a field for possible substitutes of the ingredient
//FEATURE: Add a field for potential allergens of the ingredient
//FEATURE: Add a field for popular recipes using the ingredient
//FEATURE: Add a field for the shelf life of the ingredient
//FEATURE: Add a field for the storage method of the ingredient
//FEATURE: Add a field for the date when the ingredient was added or last updated
//FEATURE: Add a field for the user who added or last updated the ingredient
export default Ingredient;
