// Import necessary services or models
import { getIngredientsService, addIngredientService } from '../services/indexService.js';

export async function getIngredients(request, reply) {
  // Here you can get all ingredients from your database and send them to the client
  // const ingredients = await getIngredientsService();
  // reply.send(ingredients);
  reply.send('Here will be all ingredients');
}

export async function addIngredient(request, reply) {
  // Here you can handle the addition of a new ingredient
  // const newIngredient = await addIngredientService(request.body);
  // reply.send(newIngredient);
  reply.send('Here will be the form to add an ingredient');
}

