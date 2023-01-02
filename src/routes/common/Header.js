import * as React from "react";
import { FormattedMessage as FM } from "react-intl";
import LanguageSelect from "components/LanguageSelect";
import { Box, Grid, Typography } from "components/muiComponents";
import NeonBorder from "components/neonBorder";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const sections = [
  { id: "1", title: "App.Home", url: "/" },
  { id: "2", title: "App.Cocktail", url: "/Cocktail" },
];

function Header() {
  const location = useLocation();
  return (
    <Grid sx={{ width: "100%" }} display="flex" alignItems="center">
      <Box sx={{ width: "30%", marginLeft: "20px" }}>
        <NeonBorder>
          <Typography component="h2" variant="h5" noWrap>
            <FM id="Elixir.Bar" />
          </Typography>
        </NeonBorder>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        {sections.map((section) => (
          <Link
            to={section.url}
            key={section.id}
            style={{
              my: 2,
              color: "#000000",
              display: "block",
              textTransform: "none",
              fontSize: "20px",
              margin: "0 16px",
              textDecoration:
                location.pathname === section.url ? "underline" : "none",
              textDecorationColor: "gold",
            }}
          >
            <NeonBorder>
              <Typography component="h2" variant="h5">
                <FM id={section.title} />
              </Typography>
            </NeonBorder>
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "end",
          marginRight: "20px",
        }}
      >
        <LanguageSelect />
      </Box>
    </Grid>
  );
}

export default Header;
