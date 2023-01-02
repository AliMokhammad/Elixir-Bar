const coloredTheme = ({ currentTheme }) => {
  return {
    direction: "ltr",
    palette: {
      primary: {
        main: currentTheme.elements.colors.primary,
      },
      secondary: {
        main: currentTheme.elements.colors.secondary,
      },
    },
    globals: currentTheme.elements,
    typography: {
      fontFamily: "cursive",
      allVariants: {
        color: currentTheme.elements.colors.primary,
      },
    },
  };
};

export default coloredTheme;
