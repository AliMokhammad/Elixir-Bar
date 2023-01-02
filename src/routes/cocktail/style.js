import { makeStyles } from "@mui/styles";

const CocktailStyle = makeStyles((theme) => {
  return {
    textField: {
      borderRadius: "1.5rem",
      boxShadow: `0 0 .2rem ${theme.globals.colors.neon}, 0 0 .2rem ${theme.globals.colors.neon}, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
      "& .MuiInputBase-root": {
        color: theme.globals.colors.neon,
        padding: "7px",
      },
    },
    select: {
      borderRadius: "1.5rem",
      boxShadow: `0 0 .2rem ${theme.globals.colors.neonSelected}, 0 0 .2rem ${theme.globals.colors.neonSelected}, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
      "& .MuiPaper-root": {
        // "& 	.MuiAutocomplete-popper": {
        // color: theme.globals.colors.neonSelected,
        backgroundColor: "transparent", //theme.globals.colors.bgColor,
        // padding: "7px",
        // },
      },
    },
  };
});

export default CocktailStyle;
