const { Router } = require("express");
const {
  postRecipe,
  getRecipesByName,
  getAllRecipes,
  getRecipe,
} = require("../controllers/recipes.controllers");

const router = new Router();

router.post("/", async (req, res) => {
  const { name, image, summary, healthScore, stepByStep, diets } = req.body;
  if ((!name || !image || !summary || !healthScore || !stepByStep || !diets)) throw Error('Faltan datos para crear la receta')
    try {
      const newRecipe = await postRecipe(
        name,
        image,
        summary,
        healthScore,
        stepByStep,
        diets
      );

      res.status(201).json(newRecipe);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
  const { name } = req.query;

  const allRecipes = name
    ? await getRecipesByName(name)
    : await getAllRecipes();
  try {
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  const recipeDetail = await getRecipe(idRecipe);

  try {
    res.status(200).json(recipeDetail);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
