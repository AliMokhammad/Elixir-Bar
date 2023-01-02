import React, { useState } from "react";
import { Box, Grid, Typography } from "components/muiComponents";
import NeonBorder from "components/neonBorder";
import { FormattedMessage as FM } from "react-intl";
import { useInterval } from "hooks";

const Home = () => {
  const [idx, setIdx] = useState(0);

  useInterval(() => setIdx((i) => (i + 1) % 8), 1000);

  return (
    <Grid
      container
      // xs={12}
      p={1}
      spacing={4}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={8}>
        <NeonBorder>
          <Box
            sx={{
              position: "relative",
              p: { xs: 1 },
              justifyContent: "center",
            }}
          >
            <Typography component="h1" variant="h2" gutterBottom>
              <FM id={"Home.Title"} />
            </Typography>
            <Typography variant="h3" paragraph>
              <FM id={"Home.Description1"} />
            </Typography>
            <Typography variant="h5" paragraph>
              <FM id={"Home.Description2"} />
            </Typography>
          </Box>
        </NeonBorder>
      </Grid>
      <Grid item xs={3}>
        <NeonBorder>
          <img
            src={`/images/home${idx + 1}.png`}
            srcSet={`/images/home${idx + 1}.png 2x`}
            alt={"home"}
            loading="lazy"
            height={316}
            width={316}
            style={{ borderRadius: "2rem" }}
          />
        </NeonBorder>
      </Grid>
    </Grid>
  );
};

export default Home;
