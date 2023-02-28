import { GET_RECIPES, ORDER, FILTER, FILTER_BY_NAME, ORIGIN } from "./actions";
import axios from "axios";
// const { API_KEY } = process.env;
const API_KEY = "7d734260d55e4012bd6100568d890b3d";

export const addRecipes = (setLoading, setError) => {
  setLoading(true);
  return async (dispatch) => {
    try {
      setError(null);
      const responseDB = await axios("http://localhost:3001/recipes");
      const resultDB = responseDB.data;
      const resultDBClean = resultDB.map((el) => {
        const elDiets = el.Diets.map((diet) => {
          return diet.name;
        });
        el.Diets = elDiets;
        return el;
      });

      const response = await axios(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      const result = response.data.results.map(async (el) => {
        return {
          id: el.id,
          name: el.title,
          image: el.image,
          summary: el.summary,
          healthScore: el.healthScore,
          stepByStep: el.instructions,
          diets: el.diets,
        };
      });

      const allPromise = await Promise.all(result);

      setLoading(false);

      return dispatch({
        type: GET_RECIPES,
        payload: [...resultDBClean, ...allPromise],
      });
    } catch (err) {
      setError("Ocurrio un error");
      return err || "Ocurrio un error";
    }
  };
};

export const order = (typeOrder) => {
  return { type: ORDER, payload: typeOrder };
};

export const filter = (status) => {
  return { type: FILTER, payload: status };
};

export const filterByName = (name) => {
  return { type: FILTER_BY_NAME, payload: name };
};

export const origin = (origin) => {
  return { type: ORIGIN, payload: origin };
};

export const resetPage = (num) => {
  return { type: FILTER_BY_NAME, payload: num };
};
