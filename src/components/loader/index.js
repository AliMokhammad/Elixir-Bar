import { useSelector } from "react-redux";
import { CircularProgress, Box } from "components/muiComponents";

const LoaderStyle = {
  position: "fixed",
  display: "flex",
  top: 0,
  bottom: 0,
  zIndex: 1800,
  backdropFilter: "blur(2px)",
  right: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default function Loader() {
  const { loading } = useSelector((state) => state.settings);
  if (!loading) return null;
  return (
    <Box style={LoaderStyle}>
      <CircularProgress />
    </Box>
  );
}
