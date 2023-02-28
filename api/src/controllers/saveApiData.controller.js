const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { getDiets } = require("./diets.controllers");
const { API_KEY } = process.env;

const getApiData = async () => {
  try {
const allRecipes = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=2`
  );
    const allRecipesId = allRecipes.data.results.map(async (el) => {
      const allRecipesId = await axios(
        `https://api.spoonacular.com/recipes/${el.id}/information?apiKey=${API_KEY}`
      );
      const element = allRecipesId.data;
      return{
        name: element.title,
        image: element.image,
        summary: element.summary,
        healthScore: element.healthScore,
        stepByStep: element.instructions,
        diets: element.diets,
      };

    }
    )
      

    const allpromise = (await Promise.all(allRecipesId))
    console.log(allpromise);

    return allpromise;
  } catch (err) {
    return { error: err.message };
  }
};

const saveApiData = async () => {
  try {
    const saveApi = await getApiData();
    await Recipe.bulkCreate(saveApi);

    return saveApi;
  } catch (err) {
    return { error: err.message };
  }
};

module.exports = {
  // saveApiData,
};
