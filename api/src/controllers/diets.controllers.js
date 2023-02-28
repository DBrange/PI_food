const { Diet } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

const postDiet = async (name) => {
  try {
    const createDiet = await Diet.create({ name })
    return createDiet;
    
  } catch (err) {
    return 'No se pudo crear la dieta'
  }
}

const getDiets = async () => {
  try {
    const findDiets = await Diet.findAll();
    if (!findDiets.length) {
      const allDiets = await axios(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=40`
      );
      ;

      const result = allDiets.data.results.map( (el) => {
        
        return el.diets;
      })
      
      const allPromise = await Promise.all(result);
      console.log(allPromise);

      let repeatedDiets = allPromise.flat();
      const repeatedDietsArr = new Set(repeatedDiets)
      let diets = [...repeatedDietsArr];

      const dietObj = diets.map(el => {
        return {name: el}
      }) 
      


      const createDiets = await Diet.bulkCreate(dietObj);

      return createDiets;
    }

    return findDiets;
  } catch (err) {
    return  'No hay dietas'
  }
}

  module.exports = {
    getDiets,
    postDiet
}