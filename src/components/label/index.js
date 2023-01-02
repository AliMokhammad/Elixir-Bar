import React from "react";
import { Typography } from "components/muiComponents";
import { FormattedMessage as FM } from "react-intl";
import NeonBorder from "components/neonBorder";

const Label = ({ id, required = false, error = false }) => (
  <NeonBorder>
    <Typography
      sx={{ textShadow: "1px 0 10px", color: error ? "#ff9900" : "#ffff" }}
    >
      <FM id={id} /> {required ? " *" : ""}
    </Typography>
  </NeonBorder>
);

export default Label;
