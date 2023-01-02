import React, { useContext } from "react";
import { CocktailContext } from "./Context";
import PersonalInfo from "./steps/PersonalInfo";
import CocktailInfo from "./steps/CocktailInfo";
import Overview from "./steps/Overview";
import Results from "./steps/Results";

export default function Content() {
  const cocktailProps = useContext(CocktailContext);

  switch (cocktailProps.activeStep) {
    case cocktailProps.steps.length:
      return <Results />;
    case 0:
      return <PersonalInfo />;
    case 1:
      return <CocktailInfo />;
    case 2:
      return <Overview />;
    default:
      return null;
  }
}
