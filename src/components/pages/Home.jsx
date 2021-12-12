import React from "react";
import { Grid } from "@mui/material";
import fondo from "../../img/marvel-home.jpg";

const Home = () => {
  return (
    <Grid container xs={12} md={12}>
      <img src={fondo} alt="fondo de pantalla" width="100%" />
    </Grid>
  );
};

export default Home;
