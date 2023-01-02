import { put, takeLatest, call } from "redux-saga/effects";
import CocktailActions from "redux/actions/cocktail";
import * as cocktailApiClient from "redux/network/cocktail";

const {
  GET_COCKTAIL_LIST,
  setCocktailList,
  GET_INGREDIENTS_LIST,
  setIngredientsList,
  GET_GLASSES_LIST,
  setGlassesList,
  GET_CATEGORIES_LIST,
  setCategoriesList,
  GET_ALCOHOLIC_TYPES,
  setAlcoholicTypes,
} = CocktailActions;

function* performGetCocktailList() {
  const result = yield call(cocktailApiClient.getAllCocktails);
  yield put(setCocktailList({ data: result.data?.drinks || [] }));
}

export function* watchGetCocktailList() {
  yield takeLatest(GET_COCKTAIL_LIST, performGetCocktailList);
}

function* performGetIngredientsList() {
  const result = yield call(cocktailApiClient.getAllIngredients);
  yield put(setIngredientsList({ data: result.data?.drinks || [] }));
}

export function* watchGetIngredientsList() {
  yield takeLatest(GET_INGREDIENTS_LIST, performGetIngredientsList);
}

function* performGetGlassesList() {
  const result = yield call(cocktailApiClient.getAllGlasses);
  yield put(setGlassesList({ data: result.data?.drinks || [] }));
}

export function* watchGetGlassesList() {
  yield takeLatest(GET_GLASSES_LIST, performGetGlassesList);
}

function* performGetCategoriesList() {
  const result = yield call(cocktailApiClient.getAllCategories);
  yield put(setCategoriesList({ data: result.data?.drinks || [] }));
}

export function* watchGetCategoriesList() {
  yield takeLatest(GET_CATEGORIES_LIST, performGetCategoriesList);
}

function* performGetAlcoholicTypes() {
  const result = yield call(cocktailApiClient.getAllAlcoholicTypes);
  yield put(setAlcoholicTypes({ data: result.data?.drinks || [] }));
}

export function* watchGetAlcoholicTypes() {
  yield takeLatest(GET_ALCOHOLIC_TYPES, performGetAlcoholicTypes);
}
