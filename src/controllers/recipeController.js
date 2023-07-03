import mongoose from 'mongoose';

const Recipe = mongoose.model('Recipe');

async function getRecipe(req, res) {
    try {
        const recipe = await Recipe.findOne({});
        res.send(recipe);
    } catch (error) {
        console.error('Error getting recipe:', error);
        res.status(500).send('Internal Server Error');
    }
}

export default { getRecipe };