import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Grid } from "components/muiComponents";
import Select from "components/select";
import { CocktailContext } from "../Context";
import CocktailStyle from "../style";
import Label from "components/label";
import DataProps from "../DataProps";

export default function CocktailInfo() {
  const classes = CocktailStyle();
  const { cocktail: cocktailState } = useSelector((state) => state);
  const { handleUserFormChange, userForm, errors } =
    useContext(CocktailContext);
  const handleFieldChange = (id) => (value) => handleUserFormChange(id, value);

  return (
    <Grid container spacing={2}>
      {DataProps.Cocktail.map((field) => (
        <Grid item xs={12} md={field.multiple ? 12 : 4}>
          <Grid p={1}>
            <Label
              id={
                errors[field.id]
                  ? `UserForm.Errors.${field.id}`
                  : `DataProps.Cocktail.${field.id}`
              }
              required={!errors[field.id]}
              error={errors[field.id]}
            />
          </Grid>
          <Grid p={1}>
            <Select
              key={field.id}
              // className={classes.select}
              {...field}
              required={true}
              options={cocktailState[field.options]}
              value={userForm[field.id]}
              onChange={handleFieldChange(field.id)}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
