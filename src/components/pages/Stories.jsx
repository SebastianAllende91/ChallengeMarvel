import { Grid, Typography } from "@mui/material";
import React from "react";
import ListStories from "../layouts/stories/ListStories";

const Stories = () => {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={3}>
        <Typography
          gutterBottom
          variant="h3"
          color="white"
          fontFamily="fantasy"
        >
          Stories
        </Typography>

        <ListStories />
      </Grid>
    </Grid>
  );
};

export default Stories;
