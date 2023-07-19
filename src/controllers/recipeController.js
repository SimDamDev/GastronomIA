// Import necessary services or models
import {getRecipesService, addRecipeService} from '../services/modelServices/index.js';

export async function getRecipes(request, reply) {
  // Here you can get all ingredients from your database and send them to the client
  // const ingredients = await getIngredientsService();
  // reply.send(ingredients);
  reply.send('Here will be all recipes');
}

export async function addRecipe(request, reply) {
  // Here you can handle the addition of a new ingredient
  // const newIngredient = await addIngredientService(request.body);
  // reply.send(newIngredient);
  reply.send('Here will be the form to add a recipe');
}
