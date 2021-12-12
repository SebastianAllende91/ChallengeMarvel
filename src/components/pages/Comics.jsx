import { Grid, Typography } from "@mui/material";
import React from "react";
import ListComics from "../layouts/comics/ListComics";

const Comics = () => {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={3}>
        <Typography
          gutterBottom
          variant="h3"
          color="white"
          fontFamily="fantasy"
        >
          Comics
        </Typography>

        <ListComics />
      </Grid>
    </Grid>
  );
};

export default Comics;
