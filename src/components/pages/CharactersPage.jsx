import React, { useEffect, useState } from "react";
import ListPersonajes from "../layouts/charactersPage/ListPersonajes";
import Search from "../layouts/charactersPage/Search";
import { Grid, Typography } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounced";

const CharactersPage = () => {
  const [query, setQuery] = useState("");

  const debouncedSearchName = useDebounce(query, 500);

  const search = (value) => {
    if (value) {
      // console.log(value);
      setQuery(value);
    }
  };

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
        <Search search={search} />
      </Grid>
      <ListPersonajes query={query} debouncedSearchName={debouncedSearchName} />
    </Grid>
  );
};

export default CharactersPage;
