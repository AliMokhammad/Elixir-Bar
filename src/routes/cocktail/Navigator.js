import React, { useContext } from "react";
import { FormattedMessage as FM } from "react-intl";
import { CocktailContext } from "./Context";
import { Grid, Button, Typography } from "components/muiComponents";
import NeonBorder from "components/neonBorder";

const BackButton = ({ display, handleBack }) => {
  if (!display) return null;
  return (
    <Button onClick={handleBack}>
      <NeonBorder>
        <Typography sx={{ px: 1 }}>
          <FM id="Buttons.Back" />
        </Typography>
      </NeonBorder>
    </Button>
  );
};

const NextButton = ({ display, isDone, handleNext }) => {
  if (!display) return null;
  return (
    <Button onClick={handleNext}>
      <NeonBorder>
        <Typography sx={{ px: 1 }}>
          <FM id={isDone ? "Buttons.CheckResults" : "Buttons.Next"} />
        </Typography>
      </NeonBorder>
    </Button>
  );
};

const ResetButton = ({ display, handleReset }) => {
  if (!display) return null;
  return (
    <Button onClick={handleReset}>
      <NeonBorder>
        <Typography sx={{ px: 1 }}>
          <FM id="Buttons.Reset" />
        </Typography>
      </NeonBorder>
    </Button>
  );
};

export default function Navigator() {
  const cocktailProps = useContext(CocktailContext);

  const handleNext = () => {
    if (!cocktailProps.isValid()) return;
    cocktailProps.setActiveStep((prevStep) =>
      Math.min(prevStep + 1, cocktailProps.steps.length)
    );
  };

  const handleReset = () => cocktailProps.setActiveStep(0);

  const handleBack = () =>
    cocktailProps.setActiveStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <Grid display="flex" justifyContent="end">
      <BackButton
        display={
          cocktailProps.activeStep !== cocktailProps.steps.length &&
          cocktailProps.activeStep !== 0
        }
        handleBack={handleBack}
      />
      <NextButton
        display={cocktailProps.activeStep !== cocktailProps.steps.length}
        isDone={cocktailProps.activeStep === cocktailProps.steps.length - 1}
        handleNext={handleNext}
      />
      <ResetButton
        display={cocktailProps.activeStep === cocktailProps.steps.length}
        handleReset={handleReset}
      />
    </Grid>
  );
}
