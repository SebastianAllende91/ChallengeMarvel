import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import Progress from "../../progress/Progress";

const CardItemComics = ({ data }) => {
  const { id, title, thumbnail } = data;
  //console.log(data);

  return (
    <>
      <Grid item sx={12} sm={12} md={12} className="card-item-1">
        {!thumbnail ? (
          <Progress />
        ) : (
          <Grid justifyContent="center">
            <Typography variant="h2" component="div" color="white" gutterBottom>
              {title}
            </Typography>
            <CardMedia
              className="img-cardItem-comics"
              component="img"
              alt={id}
              image={`${thumbnail.path}.${thumbnail.extension}`}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CardItemComics;
