import React, { useCallback, useEffect, useState } from "react";
import { FormattedMessage as FM } from "react-intl";
import { Grid, Typography } from "components/muiComponents";
import Tracker from "./Tracker";
import { CocktailContext } from "./Context";
import { validatePhoneNumber, validateEmail } from "utils";
import Navigator from "./Navigator";
import Content from "./Content";
import DataProps from "./DataProps";
import CocktailActions from "redux/actions/cocktail";
import NeonBorder from "components/neonBorder";
const {
  getCocktailList,
  getIngredientsList,
  getGlassesList,
  getCategoriesList,
  getAlcoholicTypes,
} = CocktailActions;

const steps = DataProps.Steps.map((step) => (
  <FM id={`Cocktail.Steps.${step}`} />
));

const fetchCocktailData = () => {
  window.dispatch(getCocktailList());
  window.dispatch(getIngredientsList());
  window.dispatch(getGlassesList());
  window.dispatch(getCategoriesList());
  window.dispatch(getAlcoholicTypes());
};

export default function Cocktail() {
  const [activeStep, setActiveStep] = useState(0);
  const [userForm, setUserForm] = useState({ ...DataProps.InitUserForm });
  const [errors, setErros] = useState({});

  const handleUserFormChange = useCallback(
    (key, value) => {
      setUserForm((prevForm) => ({ ...prevForm, [key]: value }));

      if (!errors[key]) return;
      if (["phone", "email"].includes(key)) {
        if (key === "phone" && !validatePhoneNumber(value)) return;
        if (key === "email" && !validateEmail(value)) return;
      }

      let errs = { ...errors };
      delete errs[key];
      setErros(errs);
    },
    [userForm, errors]
  );

  const validatePersonalInformation = useCallback(
    (errs) => {
      ["barName", "firstName", "lastName"].forEach((key) => {
        if (!userForm[key]) errs[key] = true;
      });
      if (!validatePhoneNumber(userForm.phone)) errs.phone = true;
      if (!validateEmail(userForm.email)) errs.email = true;
    },
    [userForm]
  );

  const validateCocktailInformation = useCallback(
    (errs) => {
      ["category", "drinkType", "glassType"].forEach((key) => {
        if (!userForm[key]) errs[key] = true;
      });
      if (!userForm.ingredients.length) errs.ingredients = true;
    },
    [userForm]
  );

  const isValid = useCallback(() => {
    let errs = { ...errors };
    switch (activeStep) {
      case 0:
        validatePersonalInformation(errs);
        break;
      case 1:
        validateCocktailInformation(errs);
        break;
      default:
        break;
    }
    setErros(errs);
    return Object.keys(errs).length === 0;
  }, [activeStep, errors, userForm]);

  useEffect(() => {
    (async () => fetchCocktailData())();
  }, []);

  return (
    <Grid
      container
      xs={12}
      p={1}
      // pt={0}
      spacing={4}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <CocktailContext.Provider
        value={{
          steps,
          icons: DataProps.Icons,
          activeStep,
          setActiveStep,
          isValid,
          userForm,
          errors,
          handleUserFormChange,
        }}
      >
        <Grid item xs={4}>
          {steps[activeStep] && (
            <NeonBorder>
              <Typography component="h4" variant="h4">
                {steps[activeStep]}
              </Typography>
            </NeonBorder>
          )}
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          {activeStep < steps.length && (
            <NeonBorder>
              <Tracker />
            </NeonBorder>
          )}
        </Grid>
        <Grid item xs={4} display="flex">
          <NeonBorder>
            <Typography component="h1" variant="h4" align="center">
              <FM id="Magic.Potions" />
            </Typography>
          </NeonBorder>
        </Grid>

        <Grid item xs={12} pt={0} alignItems="center" justifyContent="center">
          <Content />
        </Grid>
        <Grid item xs={12} pt={0}>
          <Navigator />
        </Grid>
      </CocktailContext.Provider>
    </Grid>
  );
}
