import { makeStyles } from "@mui/styles";

const common = {
  width: "fit-content",
  backgroundColor: "#011047",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1.5rem",
  padding: "0.4em",
  textShadow: "1px 0 10px",
};

const NeonStyle = makeStyles((theme) => {
  return {
    neonBorder: {
      ...common,
      border: `0.2rem solid ${theme.globals.colors.neon}`,
      boxShadow: `0 0 .2rem ${theme.globals.colors.neon}, 0 0 .2rem ${theme.globals.colors.neon}, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
    },
    neonBorderSelected: {
      ...common,
      color: theme.globals.colors.neonSelected,
      border: `0.2rem solid ${theme.globals.colors.neonSelected}`,
      boxShadow: `0 0 .2rem ${theme.globals.colors.neonSelected}, 0 0 .2rem ${theme.globals.colors.neonSelected}, 0 0 2rem #0805e8, 0 0 0.8rem #0805e8, 0 0 2.8rem #0805e8, inset 0 0 1.3rem #0805e8`,
    },
  };
});

export default NeonStyle;
