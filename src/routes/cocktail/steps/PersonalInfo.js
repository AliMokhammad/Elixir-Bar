import React, { useContext } from "react";
import { Grid, TextField, Typography } from "components/muiComponents";
import { CocktailContext } from "../Context";
import DataProps from "../DataProps";
import Label from "components/label";
import CocktailStyle from "../style";

const basicTextProps = {
  variant: "standard",
  fullWidth: true,
  autoComplete: "off",
  InputProps: {
    disableUnderline: true,
    autoComplete: "off",
    classes: {
      fontColor: "#fff",
    },
  },
};

export default function PersonalInfo() {
  const classes = CocktailStyle();
  const { handleUserFormChange, userForm, errors } =
    useContext(CocktailContext);
  const handleFieldChange = (e) =>
    handleUserFormChange(e.target.id, e.target.value);
  return (
    <Grid container spacing={2}>
      {DataProps.Personal.map((field) => (
        <Grid item xs={12} sm={4}>
          <Grid p={1}>
            <Label
              id={
                errors[field.id]
                  ? `UserForm.Errors.${field.id}`
                  : `DataProps.Personal.${field.id}`
              }
              required={!errors[field.id]}
              error={errors[field.id]}
            />
          </Grid>
          <Grid p={1}>
            <TextField
              className={classes.textField}
              key={field.id}
              {...field}
              {...basicTextProps}
              onChange={handleFieldChange}
              value={userForm[field.id]}
              sx={{ border: `0.2rem solid #fff` }}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
