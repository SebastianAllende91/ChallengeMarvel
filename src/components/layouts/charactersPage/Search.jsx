import React from "react";
import { Grid, TextField } from "@mui/material";

const Search = ({ search }) => {
  return (
    <Grid>
      <TextField
        variant="outlined"
        type="text"
        name="SearchCharacter"
        placeholder="Search Character..."
        onChange={(e) => search(e.target.value)}
        style={{
          marginBottom: "2rem",
          backgroundColor: "white",
          borderRadius: "15px",
          width: "30%",
        }}
      />
    </Grid>
  );
};

export default Search;
