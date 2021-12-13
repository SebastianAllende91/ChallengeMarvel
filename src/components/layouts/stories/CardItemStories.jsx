import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import Progress from "../../progress/Progress";
import historyImage from "../../../img/stories.jpg";

const CardItemStories = ({ data }) => {
  const { id, title, type, description } = data;

  return (
    <>
      <Grid item sx={12} sm={12} md={12} className="card-item-1">
        {!historyImage ? (
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
              image={historyImage}
            />
            {description && (
              <Grid>
                <Typography variant="h2" color="white">
                  Description:
                </Typography>
                <Typography variant="body2" color="white">
                  {description}
                </Typography>
                <Typography variant="h2" color="white">
                  Type:
                </Typography>
                <Typography variant="body2" color="white">
                  {type}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CardItemStories;
