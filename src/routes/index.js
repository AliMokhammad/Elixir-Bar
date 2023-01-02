import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import coloredTheme from "styles/coloredTheme";
import { Paper } from "components/muiComponents";
import Header from "./common/Header";
import { Home } from "./home";
import { Cocktail } from "./cocktail";

const AppRouts = () => {
  const { settings } = useSelector((state) => state);

  const materialTheme = createTheme(coloredTheme(settings));

  return (
    <ThemeProvider theme={materialTheme}>
      <Paper
        elevation={0}
        dir={"ltr"}
        sx={{
          backgroundImage: `url(/images/home.png)`,
        }}
      >
        <Suspense>
          <Header />
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/Cocktail`} element={<Cocktail />} />
          </Routes>
        </Suspense>
      </Paper>
    </ThemeProvider>
  );
};

export default AppRouts;
