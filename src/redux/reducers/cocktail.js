import { combineReducers } from "redux";
import * as CocktailActions from "../actionTypes/cocktail";

const initialState = {
  cocktails: [],
  ingredients: [],
  glasses: [],
  categories: [],
  alcoholicTypes: [],
};

const coaktail = (state = initialState, action) => {
  switch (action.type) {
    case CocktailActions.GET_COCKTAIL_LIST:
      return { ...state, cocktails: [] };

    case CocktailActions.SET_COCKTAIL_LIST:
      return { ...state, cocktails: action.data };

    case CocktailActions.GET_INGREDIENTS_LIST:
      return { ...state, ingredients: [] };

    case CocktailActions.SET_INGREDIENTS_LIST:
      return { ...state, ingredients: action.data };

    case CocktailActions.GET_GLASSES_LIST:
      return { ...state, glasses: [] };

    case CocktailActions.SET_GLASSES_LIST:
      return { ...state, glasses: action.data };

    case CocktailActions.GET_CATEGORIES_LIST:
      return { ...state, categories: [] };

    case CocktailActions.SET_CATEGORIES_LIST:
      return { ...state, categories: action.data };

    case CocktailActions.GET_ALCOHOLIC_TYPES:
      return { ...state, alcoholicTypes: [] };

    case CocktailActions.SET_ALCOHOLIC_TYPES:
      return { ...state, alcoholicTypes: action.data };

    default:
      return state;
  }
};

export default coaktail;
