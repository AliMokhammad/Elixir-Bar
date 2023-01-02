import React, { useContext } from "react";
import { Grid, Typography, List, ListItem } from "components/muiComponents";
import { FormattedMessage as FM } from "react-intl";
import NeonBorder from "components/neonBorder";

import { CocktailContext } from "../Context";
import DataProps from "../DataProps";

const SingelPersonalInfo = ({ id }) => {
  const { userForm } = useContext(CocktailContext);
  return (
    <ListItem sx={{ py: 1, px: 0 }}>
      <Typography>
        <FM id={`DataProps.Personal.${id}`} />
        {`: ${userForm[id]}`}
      </Typography>
    </ListItem>
  );
};

const SingleCocktailInfo = ({ id, optionKey, multiple }) => {
  const { userForm } = useContext(CocktailContext);
  if (multiple)
    return (
      <ListItem sx={{ py: 1, px: 0 }}>
        <Typography>
          <FM id={`DataProps.Cocktail.${id}`} />
          {`: ${userForm[id].map((options) => options[optionKey]).join(", ")}`}
        </Typography>
      </ListItem>
    );
  else
    return (
      <ListItem sx={{ py: 1, px: 0 }}>
        <Typography>
          <FM id={`DataProps.Cocktail.${id}`} />
          {`: ${userForm[id]?.[optionKey]}`}
        </Typography>
      </ListItem>
    );
};

export default function Overview() {
  return (
    <Grid container display="flex" xs={12} alignItems="center" p={2}>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <NeonBorder>
          <Grid xs={12}>
            <NeonBorder>
              <Typography component="h1" variant="h5" sx={{ px: 5 }}>
                <FM id={`Cocktail.Steps.PersonalInformation`} />
              </Typography>
            </NeonBorder>
            <List disablePadding>
              {DataProps.Personal.map((field) => (
                <SingelPersonalInfo {...field} key={field.id} />
              ))}
            </List>
          </Grid>
        </NeonBorder>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <NeonBorder>
          <Grid xs={12}>
            <NeonBorder>
              <Typography component="h1" variant="h5" sx={{ px: 5 }}>
                <FM id={`Cocktail.Steps.CocktailInformation`} />
              </Typography>
            </NeonBorder>
            <List p={2}>
              {DataProps.Cocktail.map((field) => (
                <SingleCocktailInfo {...field} key={field.id} />
              ))}
            </List>
          </Grid>
        </NeonBorder>
      </Grid>
    </Grid>
  );
}
