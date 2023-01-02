import { getData } from "./apiClient";

export const getAllCocktails = async () =>
  await getData({ endpoint: "search.php?s" });

export const getAllIngredients = async () =>
  await getData({ endpoint: "list.php", params: { i: "list" } });

export const getAllGlasses = async () =>
  await getData({ endpoint: "list.php", params: { g: "list" } });

export const getAllCategories = async () =>
  await getData({ endpoint: "list.php", params: { c: "list" } });

export const getAllAlcoholicTypes = async () =>
  await getData({ endpoint: "list.php", params: { a: "list" } });
