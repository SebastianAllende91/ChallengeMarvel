import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CardMedia, Container } from "@mui/material";
import logo from "../../img/gif-marvel-91.gif";

const Progress = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt="img-loading"
          image={logo}
          width={250}
          height={250}
        />
        <CircularProgress style={{ alignSelf: "center" }} />
      </Box>
    </Container>
  );
};

export default Progress;
