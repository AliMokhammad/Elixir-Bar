import React, { useCallback, useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage as FM } from "react-intl";
import Carousel from "components/carousel";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import { Typography, Grid } from "components/muiComponents";
import { CocktailContext } from "../Context";
import NeonBorder from "components/neonBorder";

const normalizeValue = (value) =>
  typeof value === "string" ? value.trim().toLowerCase() : "";

export default function Results() {
  const { cocktail: cocktailState } = useSelector((state) => state);
  const { userForm } = useContext(CocktailContext);
  const FinalForm = useMemo(
    () => ({
      strCategory: normalizeValue(userForm.category?.strCategory),
      strAlcoholic: normalizeValue(userForm.drinkType?.strAlcoholic),
      strGlass: normalizeValue(userForm.glassType?.strGlass),
      strIngredients:
        userForm.ingredients?.map((ingredient) =>
          normalizeValue(ingredient.strIngredient1)
        ) || [],
    }),
    [userForm]
  );
  const validateValue = useCallback(
    (key, value) => {
      if (!value) return false;
      if (key === "ingredient")
        return FinalForm.strIngredients.includes(normalizeValue(value));
      return FinalForm[key] === normalizeValue(value);
    },
    [FinalForm]
  );
  const CocktailList = useMemo(
    () =>
      cocktailState.cocktails.map((cocktail) => ({
        ...cocktail,
        caption: `${cocktail.strDrink}<br/> ${cocktail.strInstructions}`,
        image: cocktail.strDrinkThumb,
      })),
    [cocktailState]
  );

  const FilterCocktail = useMemo(
    () =>
      CocktailList.filter(
        (cocktail) =>
          validateValue("strCategory", cocktail.strCategory) &&
          validateValue("strAlcoholic", cocktail.strAlcoholic) &&
          validateValue("strGlass", cocktail.strGlass) &&
          (validateValue("ingredient", cocktail.strIngredient1) ||
            validateValue("ingredient", cocktail.strIngredient2) ||
            validateValue("ingredient", cocktail.strIngredient3) ||
            validateValue("ingredient", cocktail.strIngredient4) ||
            validateValue("ingredient", cocktail.strIngredient5) ||
            validateValue("ingredient", cocktail.strIngredient6) ||
            validateValue("ingredient", cocktail.strIngredient7) ||
            validateValue("ingredient", cocktail.strIngredient8) ||
            validateValue("ingredient", cocktail.strIngredient9) ||
            validateValue("ingredient", cocktail.strIngredient10) ||
            validateValue("ingredient", cocktail.strIngredient11) ||
            validateValue("ingredient", cocktail.strIngredient12) ||
            validateValue("ingredient", cocktail.strIngredient13) ||
            validateValue("ingredient", cocktail.strIngredient14) ||
            validateValue("ingredient", cocktail.strIngredient15))
      ),
    [CocktailList, validateValue]
  );
  if (!FilterCocktail.length)
    return (
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <NeonBorder>
          <Typography fontSize={75}>
            <Grid item display="flex" justifyContent="center">
              <NoDrinksIcon fontSize="100px" />
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <FM id={`Cocktail.Steps.Result.NoData`} />
            </Grid>
          </Typography>
        </NeonBorder>
      </Grid>
    );
  else
    return (
      <Grid display="flex">
        <Carousel data={FilterCocktail || []} />{" "}
      </Grid>
    );
}
