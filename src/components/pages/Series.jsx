import { Grid, Typography } from "@mui/material";
import React from "react";
import ListSeries from "../layouts/series/ListSeries";

const Series = () => {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={3}>
        <Typography
          gutterBottom
          variant="h3"
          color="white"
          fontFamily="fantasy"
        >
          Series
        </Typography>

        <ListSeries />
      </Grid>
    </Grid>
  );
};

export default Series;
