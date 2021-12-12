import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import historyImage from "../../../img/stories.jpg";

const CardsStories = ({ el }) => {
  let navigate = useNavigate();

  const { id, title } = el;

  const newTitle = title.toLowerCase().substring(0, 30);

  const handleId = () => {
    navigate(`${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, height: "500px" }} className="card-img">
        <CardMedia
          component="img"
          alt="imagenComics"
          image={historyImage}
          height="80%"
        />
        <CardContent>
          <Typography gutterBottom component="div" style={{ margin: "1px" }}>
            <em>
              <b>{newTitle}</b>
            </em>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleId}
            style={{ backgroundColor: "black" }}
          >
            <Link to={id} style={{ textDecoration: "none", color: "white" }}>
              view Storie
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardsStories;
