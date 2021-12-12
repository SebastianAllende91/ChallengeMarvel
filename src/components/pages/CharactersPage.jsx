import React from "react";
import ListPersonajes from "../layouts/charactersPage/ListPersonajes";
import Search from "../layouts/charactersPage/Search";
import { Grid, Typography } from "@mui/material";

const CharactersPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={3}>
        <Typography
          gutterBottom
          variant="h3"
          color="white"
          fontFamily="fantasy"
        >
          Characters
        </Typography>
        <Search />
      </Grid>
      <ListPersonajes />
    </Grid>
  );
};

export default CharactersPage;
