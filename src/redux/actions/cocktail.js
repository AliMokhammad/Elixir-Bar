import { createAction } from "../action_creator";
import * as CocktailActions from "../actionTypes/cocktail";

export default {
  ...createAction(CocktailActions.GET_COCKTAIL_LIST),
  ...createAction(CocktailActions.SET_COCKTAIL_LIST, "data"),

  ...createAction(CocktailActions.GET_INGREDIENTS_LIST),
  ...createAction(CocktailActions.SET_INGREDIENTS_LIST, "data"),

  ...createAction(CocktailActions.GET_GLASSES_LIST),
  ...createAction(CocktailActions.SET_GLASSES_LIST, "data"),

  ...createAction(CocktailActions.GET_CATEGORIES_LIST),
  ...createAction(CocktailActions.SET_CATEGORIES_LIST, "data"),

  ...createAction(CocktailActions.GET_ALCOHOLIC_TYPES),
  ...createAction(CocktailActions.SET_ALCOHOLIC_TYPES, "data"),
};
