import React, { useContext } from "react";
import { CocktailContext } from "./Context";
import CostumStepper from "components/stepper";

export default function Tracker() {
  const cocktailProps = useContext(CocktailContext);
  if (cocktailProps.activeStep === cocktailProps.steps.length) return null;
  return <CostumStepper {...cocktailProps} />;
}
