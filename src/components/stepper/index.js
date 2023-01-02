import React from "react";
import { Stepper, Step, StepLabel } from "components/muiComponents";
import ColorlibStepIcon from "./ColorlibStepIcon";

export default function CostumStepper({ steps, activeStep, icons }) {
  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={null}>
      {steps.map(({ label }) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={(props) => (
              <ColorlibStepIcon icons={icons} {...props} />
            )}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
