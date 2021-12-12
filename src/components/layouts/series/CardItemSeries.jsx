import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import Progress from "../../progress/Progress";

const CardItemSeries = ({ data }) => {
  const { id, title, thumbnail, description } = data;
  console.log(data);

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
              className="img-cardItem"
              component="img"
              alt={id}
              image={`${thumbnail.path}.${thumbnail.extension}`}
            />
            {description && (
              <Grid>
                <Typography variant="h2" color="white">
                  Description:
                </Typography>
                <Typography variant="body2" color="white">
                  {description}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CardItemSeries;
