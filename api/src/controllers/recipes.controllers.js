const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;

const postRecipe = async (
  name,
  image,
  summary,
  healthScore,
  stepByStep,
  diets
) => {
  try {
    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      stepByStep,
    });

    const response = await axios("http://localhost:3001/diets");
    const result = response.data;
    const dietsId = diets.map((el) =>
      result.map((elAxios) => {
        if (el === elAxios.name) {
          return elAxios.id;
        }
      })
    );

    const dietsIdFlat = dietsId.flat();
    const dietsIdClean = dietsIdFlat.filter((el) => el !== undefined);

    await newRecipe.addDiets(dietsIdClean);

    return newRecipe;
  } catch (err) {
    return "No fue posible crear esta receta";
  }
};

const getAllRecipes = async () => {
  try {
    const allRecipes = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return allRecipes;
  } catch (error) {
    return "No se encontraron las recetas";
  }
};

// Obtengo todas las recetas seleccionadas por su nombre
const getRecipesByName = async (name) => {
  try {
    // Busco todas las recetas que contengan los caracteres tipeados
    const allRecipes = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `${name}%`,
        },
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      limit: 9,
    });

    if (!allRecipes.length) {
      return await getRecipesByNameAxios(name);
    }

    return allRecipes;
  } catch (error) {
    return "No se encontraron las recetas";
  }
};

const getRecipe = async (id) => {
  try {
    if (!isNaN(id)) {
      return await getRecipeAxios(id);
    }
    const recipeDetail = await Recipe.findByPk(id, {
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return recipeDetail;
  } catch (error) {
    return "No se ha encontrado el detalle";
  }
};

const getRecipeAxios = async (id) => {
  try {
    const recipeDetailAxios = await axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const el = recipeDetailAxios.data;

    const recipeDetail = {
      id: el.id,
      name: el?.title,
      image: el?.image,
      summary: el?.summary,
      healthScore: el?.healthScore,
      stepByStep: el?.instructions,
      Diets: el.diets,
    };

    return recipeDetail;
  } catch (error) {
    return "No se ha encontrado el detalle";
  }
};

const getRecipesByNameAxios = async (name) => {
  try {
    const allRecipes = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&titleName=${name}&number=9`
    );
    const allRecipesId = allRecipes.data.results.map(async (el) => {
      return {
        id: el.id,
        name: el.title,
        image: el.image,
        summary: el.summary,
        healthScore: el.healthScore,
        stepByStep: el.instructions,
        Diets: el.diets,
      };
    });

    const allPromise = await Promise.all(allRecipesId);

    return allPromise;
  } catch (err) {
    return "No se encontraron las recetas";
  }
};

module.exports = {
  postRecipe,
  getRecipesByName,
  getAllRecipes,
  getRecipe,
};
