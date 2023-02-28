import {
  GET_RECIPES,
  ORDER,
  FILTER,
  FILTER_BY_NAME,
  RESET_PAGE,
  ORIGIN,
} from "./actions";

const initialState = {
  recipes: [],
  recipesOrigin: [],
  recipesOriginal: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesOrigin: action.payload,
        recipesOriginal: action.payload,
      };
    case ORDER:
      const sortedFn = (payload) => {
        switch (payload) {
          case "moreHealth":
            const orderReversed = recipesToSort.sort(
              (a, b) => b.healthScore - a.healthScore
            );
            return orderReversed;
          case "lowHealth":
            const order = recipesToSort.sort(
              (a, b) => a.healthScore - b.healthScore
            );
            return order;

          case "orderAlphabet":
            const orderAlphabet = recipesToSort.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            });

            return orderAlphabet;
          case "orderAlphabetReversed":
            const preOrderAlphabet = recipesToSort.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            });
            const orderAlphabetReversed = preOrderAlphabet.reverse();
            return orderAlphabetReversed;
          default:
            return recipesToSort;
        }
      };
      const recipesToSort = [...state.recipes];
      const sorted = sortedFn(action.payload);
      return {
        ...state,
        recipes: sorted,
      };
    case FILTER:
      const recipesCopy = [...state.recipesOrigin];
      const filter = recipesCopy.filter((el) => {
        if (el.diets) {
          if (el.diets.includes(action.payload)) return el;
        }
        if (el.Diets) {
          if (el.Diets.includes(action.payload)) return el;
        }
        if (action.payload === "default") return state.recipesOrigin;
        else return;
      });
      return {
        ...state,
        recipes: filter,
      };
    case FILTER_BY_NAME:
      const payload = action.payload;
      const filterName = state.recipesOrigin.filter(
        (el) =>
          el.name.slice(0, payload.length).toLowerCase() ===
          payload.toLowerCase()
      );
      return {
        ...state,
        recipes: filterName,
      };
    case ORIGIN:
      if (action.payload === "dataBase") {
        const original = state.recipesOriginal;
        state.recipesOrigin = original.filter((el) => isNaN(el.id));
      } else if (action.payload === "api") {
        const original = state.recipesOriginal;
        state.recipesOrigin = original.filter((el) => !isNaN(el.id));
      } else if (action.payload === "default") {
        const original = state.recipesOriginal;
        state.recipesOrigin = original;
      }
      return {
        ...state,
        recipes: state.recipesOrigin,
      };
    case RESET_PAGE:
      return {
        ...state,
        reset: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
